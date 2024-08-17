import TractionLogo from '../assets/traction-logo.svg'

interface LogoProps extends React.HTMLAttributes<SVGElement> {}

export function Logo(props: LogoProps) {
  return <TractionLogo {...props} />
}
