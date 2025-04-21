import { Metadata } from "next";
import '@app/styles/globals.css';
import '@app/styles/fonts.css';
import BlockPolice from "@features/blockPolice";
import AnotherHeader from "@widgets/AnotherHeader";
import Footer from "@widgets/footer";

export const metadata: Metadata = {
    title: "Axis",
    description: "Scalable systems for info businesses",
    openGraph: {
      title: "Axis",
      description: "Scalable systems for info businesses",
      images: [
        {
          url: "/social.ico",
          width: 32,
          height: 32
        }
      ]
    }
  };

export default function termsOfService() {
    return (
        <div className="pt-[100px] pb-[40px]  antialiased bg-background md:px-[25vw] px-[20px] noise-bg overflow-x-hidden">
            <AnotherHeader />
            <header className="mb-[50px]">
                <p className="text-[24px] mb-[5px]">Terms of Service</p>
                <p className="text-[20px]">Last Updated: April 21, 2025</p>
            </header>
            <main>
                <BlockPolice title="1. Overview" inSimpleTerms="You’re welcome here — just be respectful and don’t misuse the content.">
                    <p>AXIS Creo offers free strategy calls and content aimed at helping creators grow their personal brands and digital presence. These Terms outline the rules for using our site, accessing our services, and engaging with our brand.</p>
                </BlockPolice>
                <BlockPolice title="2. Content Ownership" inSimpleTerms="Our ideas and materials belong to us. Don’t repost or reuse them without asking.">
                    <p>All content on this site — including frameworks, text, visuals, and brand language — is the intellectual property of AXIS Creo unless stated otherwise. You may not copy, redistribute, or repurpose any part of our content without permission.</p>
                </BlockPolice>
                <BlockPolice title="3. Use of Services" inSimpleTerms="We’ll try to help — but not every submission guarantees a response or call.">
                    <p>You may request a free strategy call by filling out a form. We reserve the right to accept or decline requests at our discretion. Submissions must be made honestly and respectfully.</p>
                </BlockPolice>
                <BlockPolice title="4. Communications" inSimpleTerms="We’ll send helpful stuff — but you can unsubscribe anytime.">
                    <p>By submitting a form or contacting us, you agree to receive follow-up emails related to your inquiry or services. You may unsubscribe at any time using the link in our emails or by contacting us directly.</p>
                </BlockPolice>
                <BlockPolice title="5. No Guarantees" inSimpleTerms="We offer insights, not magic. What you do with it is up to you.">
                    <p>AXIS Creo does not guarantee any specific outcomes or results from free calls, content, or strategy suggestions. Everything shared is for informational and strategic purposes only.</p>
                </BlockPolice>
                <BlockPolice title="6. Changes to These Terms" inSimpleTerms="If anything changes, we’ll post it here.">
                    <p>We may update these Terms of Service from time to time. The most current version will always be available on this page.</p>
                </BlockPolice>
                <BlockPolice title="7. Contact" last>
                    <p>For any questions about these Terms, reach out to us at:</p>
                    <p>nikita@whynotlaunchformula.com</p>
                </BlockPolice>
            </main>
            <Footer />
        </div>
    )
}
