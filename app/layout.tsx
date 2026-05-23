import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sharif Mustafa | QA Automation Engineer",
  description:
    "Professional portfolio for Sharif Mustafa, a QA Automation Engineer specializing in Selenium WebDriver, Java, TestNG, Cucumber BDD, API testing, accessibility testing, and regulated industry quality assurance.",
  keywords: [
    "Sharif Mustafa",
    "QA Automation Engineer",
    "Selenium WebDriver",
    "Java",
    "TestNG",
    "Maven",
    "Cucumber BDD",
    "Postman",
    "REST Assured",
    "SQL Server",
    "Oracle",
    "JIRA",
    "ServiceNow",
    "Azure DevOps",
    "Jenkins",
    "Section 508 Compliance",
    "HIPAA",
    "GLBA",
    "Agile Scrum",
  ],
  openGraph: {
    title: "Sharif Mustafa | QA Automation Engineer",
    description:
      "QA Automation Engineer portfolio highlighting federal, banking, and healthcare testing experience.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharif Mustafa | QA Automation Engineer",
    description:
      "Portfolio for Sharif Mustafa, a QA Automation Engineer with automation, API, database, and compliance testing expertise.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
