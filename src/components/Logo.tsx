import TractianLogo from '../assets/tractian-logo.svg'

interface LogoProps extends React.HTMLAttributes<SVGElement> {}

export function Logo(props: LogoProps) {
  return <TractianLogo {...props} />
}
