import "./globals.css";

export const metadata = {
  title: "PixelOven",
  description: "High performance application development and consultation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
