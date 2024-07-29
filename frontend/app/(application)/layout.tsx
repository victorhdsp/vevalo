interface ApplicationLayoutProps {
  children: React.ReactNode
}

function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return (
    <>{children}</>
  );
}

export default ApplicationLayout;