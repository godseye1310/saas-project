import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

const bricolage = Bricolage_Grotesque({
	variable: "--font-bricolage",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Converso",
	description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bricolage.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
				>
					<ClerkProvider
						appearance={{ variables: { colorPrimary: "#fe5933" } }}
					>
						<Navbar />
						{children}
					</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
