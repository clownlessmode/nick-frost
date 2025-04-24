"use client";
import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@shared/ui/dialog";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import dotenv from 'dotenv';
import {IMaskInput} from 'react-imask';
import IMask, {InputMask, MaskedPatternOptions} from 'imask';

dotenv.config();

interface ModalFormProps {
  triggerText: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  description: string;
  additionalField: string;
  option: string[];
  phoneNumber: string;
  email: string;
  others: string;
}

type FormField = keyof FormData;

const ModalForm: FC<ModalFormProps> = ({ triggerText }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [defaultCountry, setDefaultCountry] = useState<string>('US');
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const [phoneMask, setPhoneMask] = useState<InputMask<MaskedPatternOptions> | null>(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [others, setOthers] = useState<boolean>(true);

  console.log(status);
  console.log(phoneInputRef);
  console.log(phoneMask);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      description: "",
      additionalField: "",
      option: [],
      phoneNumber: "",
      email: "",
      others: "",
    },
  });

  const formData = watch();

  useEffect(() => {
    // Функция для определения страны по IP
    const detectCountryByIP = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data && data.country) {
          setDefaultCountry(data.country);
          initializePhoneMask(data.country);
          console.log(data.country);
        } else {
          // Fallback to browser language if IP detection fails
          const userLanguage = navigator.language || 'en-US';
          const countryCode = userLanguage.split('-')[1] || 'US';
          setDefaultCountry(countryCode);
          initializePhoneMask(countryCode);
        }

      } catch (error) {
        console.error('Error detecting country by IP:', error);
        // Fallback to browser language if IP detection fails
        const userLanguage = navigator.language || 'en-US';
        const countryCode = userLanguage.split('-')[1] || 'US';
        setDefaultCountry(countryCode);
        initializePhoneMask(countryCode);
      }
    };

    // Функция для инициализации маски телефона
    const initializePhoneMask = (countryCode: string) => {
      const maskOptions = {
        mask: getPhoneMask(countryCode),
      };
      
      const inputElement = document.getElementById('phoneNumber') as HTMLInputElement;
      if (inputElement) {
        const mask = IMask(inputElement, maskOptions);
        setPhoneMask(mask);
        
        // Очищаем маску при размонтировании
        return () => mask.destroy();
      }
    };

    if (typeof window !== 'undefined') {
      detectCountryByIP();
    }
  }, []);

  // Функция для получения маски телефона в зависимости от страны
  const getPhoneMask = (countryCode: string) => {
    const countryMasks: Record<string, string> = {
      'RU': '+{7} (000) 000-00-00', // Россия
      'US': '+1 (000) 000-0000', // США
      'GB': '+44 (000) 0000-0000', // Великобритания
      'DE': '+49 (000) 000-0000', // Германия
      'FR': '+33 (0) 00 00 00 00', // Франция
      'IT': '+39 (000) 000-0000', // Италия
      'ES': '+34 (000) 000-000', // Испания
      'CA': '+1 (000) 000-0000', // Канада
      'AU': '+61 (0) 0000-0000', // Австралия
      'JP': '+81 (00) 0000-0000', // Япония
      'CN': '+86 (000) 000-0000', // Китай
      'IN': '+91 (0000) 000-000', // Индия
      'BR': '+55 (00) 00000-0000', // Бразилия
      'MX': '+52 (000) 000-0000', // Мексика
      'KR': '+82 (00) 0000-0000', // Южная Корея
      'ID': '+62 (000) 000-000', // Индонезия
      'TR': '+90 (000) 000-0000', // Турция
      'SA': '+966 (0) 0000-0000', // Саудовская Аравия
      'ZA': '+27 (00) 000-0000', // Южная Африка
      'NG': '+234 (000) 000-0000', // Нигерия
    };

    return countryMasks[countryCode] || '+{000} (000) 000-0000'; // Общий формат для других стран
  };

  // Остальной код компонента остается без изменений...
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setValue(id as FormField, value);
  };

  const handlePhoneAccept = (value: string) => {
    setValue('phoneNumber', value, { shouldValidate: true });
  };

  const handleOptionSelect = (selectedOption: string) => {
    const currentOptions = watch("option");
    const updatedOptions = currentOptions.includes(selectedOption) 
      ? currentOptions.filter((opt) => opt !== selectedOption)
      : [...currentOptions, selectedOption];

    if(selectedOption == 'OTHER'){
      setOthers(!others);
    }

    setValue("option", updatedOptions);
  };

  const nextStep = async () => {
    const fieldsToValidate: FormField[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate.push("firstName", "lastName", "phoneNumber", "email");
        break;
      case 2:
        fieldsToValidate.push("description");
        break;
      case 3:
        fieldsToValidate.push("additionalField");
        break;
      case 4:
        fieldsToValidate.push("option");
        break;
      default:
        break;
    }

    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    if(data.option.length != 0){
      try {
        setStatus(null);
        
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response:', text.substring(0, 200));
          throw new Error('Server returned unexpected response');
        }
    
        const result = await response.json();
    
        if (!response.ok) {
          throw new Error(result.error || 'Request failed');
        }
    
        setStatus({ ok: true, message: 'Message sent successfully!' });
    
      } catch (error) {
        console.error('Submission error:', error);
        setStatus({
          ok: false,
          message: error instanceof Error ? error.message : 'Submission failed',
        });
      } finally{
        window.location.href="https://calendly.com/iamnikfrost/axis-discovery-call";
      }
    }
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="flex gap-[10px] sm:gap-[12px] md:gap-[8px] lg:gap-[12px] 2xl:gap-[20px]">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={`transition-transform w-[51px] h-[15px] sm:w-[75px] sm:h-[22px] md:w-[51px] md:h-[15px] lg:w-[75px] lg:h-[22px] 2xl:w-[121px] 2xl:h-[36px] rounded-[40px] flex items-center justify-center 
                ${currentStep === step
                  ? "bg-[#1C8F74] text-white translate-y-[-3px] md:translate-y-[-10px]"
                  : "bg-white  text-black"
                }`}
            >
              <span className="text-[6px] sm:text-[12px] md:text-[6px] lg:text-[10px] 2xl:text-[16px]">
                0{step} STEP
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-center uppercase text-[21px] sm:text-[42px] md:text-[21px] lg:text-[32px] 2xl:text-[50px] font-normal md:mb-[40px] mb-[20px]"
            >
              your full name
            </label>
            <div>
              <Input
                id="firstName"
                type="text"
                {...register("firstName", { required: "First name is required" })}
                onChange={handleChange}
                placeholder="FIRST NAME"
                className="md:p-[24px] p-[10px] md:mb-[24px] mb-[10px] bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm ml-[10px]">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div>
              <Input
                id="lastName"
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                onChange={handleChange}
                placeholder="LAST NAME"
                className="md:p-[24px] p-[10px] md:mb-[24px] mb-[10px] bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm ml-[10px]">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <IMaskInput
                id="phoneNumber"
                mask={getPhoneMask(defaultCountry)}
                definitions={{
                  '0': /[0-9]/
                }}
                onAccept={handlePhoneAccept}
                placeholder="PHONE NUMBER"
                className="w-full md:p-[24px] p-[10px] md:mb-[24px] mb-[10px] bg-transparent border! focus-visible:outline-0! border-[#FFFFFF]! h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
                {...register("phoneNumber", { 
                  required: "Phone number is required",
                  validate: (value) => {
                    const digits = value.replace(/\D/g, '');
                    return digits.length >= 7 || "Invalid phone number";
                  }
                })}
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm ml-[10px]">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email address"
                  }})}
                onChange={handleChange}
                placeholder="EMAIL"
                className="md:p-[24px] p-[10px] bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
              />
              {errors.email && (
                <span className="text-red-500 text-sm ml-[10px]">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
            <label
              htmlFor="description"
              className="text-center md:mb-[40px] mb-[25px] mb-[] uppercase text-[21px] leading-[25px] sm:text-[42px] sm:leading-[44px] md:text-[21px] md:leading-[25px] lg:text-[32px] lg:leading-[34px] 2xl:text-[50px] 2xl:leading-[54px] 2xl:max-w-[560px]"
            >
              Describe your offer in 1-3 sentences
            </label>
            <label
              htmlFor="description"
              className="text-center text-[12px] md:mb-[40px] mb-[25px]  sm:text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px]"
            >
              Example: I help IT-Companies get more clients using LinkedIn Ads
            </label>
            <div className="w-full">
              <textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                onChange={handleChange}
                placeholder="Enter text"
                className="md:p-[24px] p-[10px] mb-[5px] w-full bg-transparent border border-[#FFFFFF] h-[80px] rounded-[8px] sm:h-[180px] sm:rounded-[12px] md:h-[100px] md:rounded-[8px] lg:h-[150px] lg:rounded-[12px] 2xl:h-[200px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-[#c0c0c0] placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
              />
              {errors.description && (
                <span className="text-red-500 text-sm text-center">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center flex-col">
            <label
              htmlFor="additionalField"
              className="md:mb-[40px] mb-[25px] text-center uppercase text-[21px] leading-[25px] max-w-[150px] sm:text-[42px] sm:leading-[44px] sm:max-w-[300px] md:text-[21px] md:leading-[25px] md:max-w-[200px] lg:text-[32px] lg:leading-[34px] lg:max-w-[300px] 2xl:text-[50px] 2xl:leading-[54px] 2xl:max-w-[480px]"
            >
              What is the price of your main offer (in USD)?
            </label>
            <div className="w-full">
              <Input
                id="additionalField"
                type="text"
                {...register("additionalField", {
                  required: "Price is required",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Please enter a valid number",
                  },
                })}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9.]/g, "");
                  const dotCount = (value.match(/\./g) || []).length;
                  if (dotCount > 1) {
                    return;
                  }
                  e.target.value = value;
                  handleChange(e);
                }}
                placeholder="10.000$"
                className="md:p-[24px] p-[10px] mb-[5px] bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-[#c0c0c0] placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px] pr-[70px]"
              />
              {errors.additionalField && (
                <span className="text-red-500 text-sm ml-[10px]">
                  {errors.additionalField.message}
                </span>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center flex-col w-full">
            <label className="md:mb-[30px] mb-[25px]  text-center uppercase text-[21px] leading-[25px] sm:text-[42px] sm:leading-[44px] md:text-[21px] md:leading-[25px] lg:text-[32px] lg:leading-[34px] 2xl:text-[50px] 2xl:leading-[54px]">
              <span className="block max-w-[100%] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px] 2xl:max-w-[480px] mx-auto">
                How do you currently get clients?
              </span>
            </label>
            <div className="grid grid-cols-2 lg:gap-x-[24px] lg:gap-y-[20px] gap-x-[10px] gap-y-[7px] w-full">
              {[
                "COLD OUTREACH",
                "E-MAIL MARKETING",
                "PAID ADS",
                "RECOMMENDATIONS",
                "CONTENT MARKETING",
                "OTHER",
              ].map((option) => {
                const isSelected = formData.option.includes(option)
                return (<Button
                  key={option}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full h-[32px] rounded-[8px] 
                      sm:h-[48px] sm:rounded-[12px] 
                      md:h-[32px] md:rounded-[8px] 
                      lg:h-[44px] lg:rounded-[12px] 
                      2xl:h-[72px] 2xl:rounded-[20px] 
                      border-[#FFFFFF]
                      text-[8px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]
                      text-left! block
                      md:px-[24px] px-[10px]
                      ${
                        isSelected
                          ? "bg-white text-black"
                          : "bg-transparent text-white border"
                      }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              )})}
            </div>
            {errors.option && (
              <span className="text-red-500 text-sm">
                {errors.option.message}
              </span>
            )}
            <div className="md:mt-[30px] mt-[10px] flex flex-col w-full" hidden={others}>
              <Input
                  id="others"
                  type="text"
                  {...register("others")}
                  onChange={handleChange}
                  placeholder="YOUR OPTION"
                  className="md:p-[24px] w-full p-[10px] mb-[5px] bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-[#c0c0c0] placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px] pr-[70px]"
                />
                {errors.additionalField && (
                  <span className="text-red-500 text-sm ml-[10px]">
                    {errors.additionalField.message}
                  </span>
                )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="font-light h-[40px] text-[16px] sm:h-[58px] sm:text-[20px] md:h-[34px] md:text-[10px] lg:h-[40px] lg:text-[10px] 2xl:h-[74px] 2xl:text-[24px] mt-[20px]"
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex bg-[#1C8F74]/10 items-center justify-center flex-col max-w-[280px] h-[335px] sm:max-w-[513px] sm:h-[627px] md:max-w-[300px] md:h-[335px] lg:max-w-[431px] lg:h-[481px] 2xl:max-w-[693px] 2xl:h-[774px] border border-white/20 rounded-[12px] sm:rounded-[19px] md:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[28px] backdrop-blur-md  p-4 sm:p-6 md:p-4 lg:p-6 2xl:p-8 md:[&>button]:block [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-[24px] sm:text-[32px] md:text-[28px] lg:text-[32px] 2xl:text-[48px] uppercase">
            {renderStepIndicator()}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleFormSubmit(onSubmit)}
          className="flex flex-col justify-between h-full w-full"
        >
          <div className="flex-1 flex flex-col justify-center">
            {renderStep()}
          </div>

          <div className="mt-auto">
            {currentStep != totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                variant="secondary"
                className="w-full md:mb-[10px] text-white bg-[#1C8F74] h-[29px] rounded-[10px] text-[10px] sm:h-[41px] sm:rounded-[12px] sm:text[16px] md:h-[29px] md:rounded-[10px] md:text-[10px] lg:h-[41px] lg:rounded-[12px] lg:text-[14px] 2xl:h-[67px] 2xl:rounded-[20px] 2xl:text-[22px]"
              >
                Next step
              </Button>
            ) : (
              <Button
                type="submit"
                variant="secondary"
                className="w-full md:mb-[10px] text-white bg-[#1C8F74] h-[29px] rounded-[10px] text-[10px] sm:h-[41px] sm:rounded-[12px] sm:text[16px] md:h-[29px] md:rounded-[10px] md:text-[10px] lg:h-[41px] lg:rounded-[12px] lg:text-[14px] 2xl:h-[67px] 2xl:rounded-[20px] 2xl:text-[22px]"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModalForm;