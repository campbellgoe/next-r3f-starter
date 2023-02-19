import "./styles.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="static inset-0">
      <body className="absolute inset-0">{children}</body>
    </html>
  )
}
