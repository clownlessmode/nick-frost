"use client";
import React, { ChangeEvent, FC, useState } from "react";
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

interface ModalFormProps {
  triggerText: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  description: string;
  additionalField: string;
  option: string[];
}

type FormField = keyof FormData;

const ModalForm: FC<ModalFormProps> = ({ triggerText }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Интегрируем react-hook-form, сохраняя вашу существующую структуру
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
    },
  });

  // Используем watch для получения текущих значений формы
  const formData = watch();

  // Обработчик изменений для полей ввода
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setValue(id as FormField, value);
  };

  // Обработчик выбора опции
  const handleOptionSelect = (selectedOption: string) => {
    const currentOptions = watch("option");
    const updatedOptions = currentOptions.includes(selectedOption) 
      ? currentOptions.filter((opt) => opt !== selectedOption)
      : [...currentOptions, selectedOption];

    setValue("option", updatedOptions);
  };

  // Переход к следующему шагу
  const nextStep = async () => {
    // Проверяем валидность текущего шага перед переходом
    const fieldsToValidate: FormField[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate.push("firstName", "lastName");
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

  // Переход к предыдущему шагу

  // Переход к конкретному шагу
  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  // Обработчик отправки формы
  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Здесь можно добавить логику отправки формы
  };
  
  // Обработчик для совместимости с вашим существующим кодом
  
  const renderStepIndicator = () => {
    return (
      <div className="flex gap-[10px] sm:gap-[12px] md:gap-[8px] lg:gap-[12px] 2xl:gap-[20px]">
        {
        Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => goToStep(step)}
          >
            <div
              className={`transition-transform w-[51px] h-[15px] sm:w-[75px] sm:h-[22px] md:w-[51px] md:h-[15px] lg:w-[75px] lg:h-[22px] 2xl:w-[121px] 2xl:h-[36px] rounded-[40px] flex items-center justify-center 
                ${currentStep === step
                  ? "bg-[#1C8F74] text-white translate-y-[-10px]"
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
          <div className="flex flex-col gap-[30px]">
            <label
              htmlFor="firstName"
              className="text-center uppercase text-[21px] sm:text-[42px] md:text-[21px] lg:text-[32px] 2xl:text-[50px] font-normal"
            >
              your full name
            </label>
            <Input
              id="firstName"
              type="text"
              {...register("firstName", { required: "First name is required" })}
              onChange={handleChange}
              placeholder="FIRST NAME"
              className="bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}

            <Input
              id="lastName"
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              onChange={handleChange}
              placeholder="LAST NAME"
              className="bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center gap-[30px]">
            <label
              htmlFor="description"
              className="text-center uppercase text-[21px] leading-[25px] sm:text-[42px] sm:leading-[44px] md:text-[21px] md:leading-[25px] lg:text-[32px] lg:leading-[34px] 2xl:text-[50px] 2xl:leading-[54px] 2xl:max-w-[560px]"
            >
              Describe your offer in 1-3 sentences
            </label>
            <label
              htmlFor="description"
              className="text-center text-[12px] sm:text-[16px] md:text-[14px] lg:text-[16px] 2xl:text-[20px]"
            >
              Example: I help IT-Companies get more clients using LinkedIn Ads
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              onChange={handleChange}
              placeholder="Enter text"
              className="w-full p-2 bg-transparent border border-[#FFFFFF] h-[80px] rounded-[8px] sm:h-[180px] sm:rounded-[12px] md:h-[100px] md:rounded-[8px] lg:h-[150px] lg:rounded-[12px] 2xl:h-[200px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px]"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex items-center flex-col gap-[30px]">
            <label
              htmlFor="additionalField"
              className="text-center uppercase text-[21px] leading-[25px] max-w-[150px] sm:text-[42px] sm:leading-[44px] sm:max-w-[300px] md:text-[21px] md:leading-[25px] md:max-w-[200px] lg:text-[32px] lg:leading-[34px] lg:max-w-[300px] 2xl:text-[50px] 2xl:leading-[54px] 2xl:max-w-[480px]"
            >
              What is the price of your main offer (in USD)?
            </label>
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
                // Разрешаем только числа и точку для десятичных
                const value = e.target.value.replace(/[^0-9.]/g, "");
                const dotCount = (value.match(/\./g) || []).length;
                if (dotCount > 1) {
                  return;
                }
                e.target.value = value;
                handleChange(e);
              }}
              placeholder="10.000$"
              className="bg-transparent border-[#FFFFFF] h-[32px] rounded-[8px] sm:h-[48px] sm:rounded-[12px] md:h-[32px] md:rounded-[8px] lg:h-[44px] lg:rounded-[12px] 2xl:h-[72px] 2xl:rounded-[20px] text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px] placeholder:text-white placeholder:text-[10px] sm:placeholder:text-[16px] md:placeholder:text-[10px] lg:placeholder:text-[14px] 2xl:placeholder:text-[22px] pr-[70px]"
            />
            {errors.additionalField && (
              <span className="text-red-500 text-sm">
                {errors.additionalField.message}
              </span>
            )}
          </div>
        );
      case 4:
        return (
          <div className="flex items-center flex-col gap-[30px] w-full">
            <label className="text-center uppercase text-[21px] leading-[25px] sm:text-[42px] sm:leading-[44px] md:text-[21px] md:leading-[25px] lg:text-[32px] lg:leading-[34px] 2xl:text-[50px] 2xl:leading-[54px]">
              <span className="block max-w-[150px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px] 2xl:max-w-[480px] mx-auto">
                How do you currently get clients?
              </span>
            </label>
            <div className="grid grid-cols-2 gap-3 w-full">
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
                      text-[10px] sm:text-[16px] md:text-[10px] lg:text-[14px] 2xl:text-[22px]
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
          className="font-light h-[28px] text-[10px] sm:h-[58px] sm:text-[20px] md:h-[34px] md:text-[10px] lg:h-[40px] lg:text-[10px] 2xl:h-[74px] 2xl:text-[18px]"
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex bg-[#1C8F74]/10 items-center justify-center flex-col max-w-[280px] h-[335px] sm:max-w-[513px] sm:h-[627px] md:max-w-[300px] md:h-[335px] lg:max-w-[431px] lg:h-[481px] 2xl:max-w-[693px] 2xl:h-[774px] border border-white/20 rounded-[12px] sm:rounded-[19px] md:rounded-[12px] lg:rounded-[14px] 2xl:rounded-[28px] backdrop-blur-md  p-4 sm:p-6 md:p-4 lg:p-6 2xl:p-8">
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
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                variant="secondary"
                className="w-full text-white bg-[#1C8F74] h-[29px] rounded-[10px] text-[10px] sm:h-[41px] sm:rounded-[12px] sm:text[16px] md:h-[29px] md:rounded-[10px] md:text-[10px] lg:h-[41px] lg:rounded-[12px] lg:text-[14px] 2xl:h-[67px] 2xl:rounded-[20px] 2xl:text-[22px]"
              >
                Next step
              </Button>
            ) : (
              <Button
                type="submit"
                variant="secondary"
                className="w-full text-white bg-[#1C8F74] h-[29px] rounded-[10px] text-[10px] sm:h-[41px] sm:rounded-[12px] sm:text[16px] md:h-[29px] md:rounded-[10px] md:text-[10px] lg:h-[41px] lg:rounded-[12px] lg:text-[14px] 2xl:h-[67px] 2xl:rounded-[20px] 2xl:text-[22px]"
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
