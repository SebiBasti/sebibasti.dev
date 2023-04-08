import usesStyle from '@/styles/uses.module.scss'
import Link from 'next/link'

export default function Uses() {
  return (
    <section className={usesStyle.container}>
      <h1>This&nbsp;is my&nbsp;current Hard-&nbsp;and Software Setup:</h1>
      <h2>Hardware</h2>
      <ul>
        <li>
          Desktop PC: Ryzen&nbsp;5&nbsp;2600, GeForce&nbsp;RTX&nbsp;2060,
          2&nbsp;x&nbsp;Corsair DDR4-3200, Asus&nbsp;Rog Strix&nbsp;X470-I,
          Samsung&nbsp;970&nbsp;Pro 500GB, Samsung&nbsp;860&nbsp;1TB,
          DanCase&nbsp;A4, Dual&nbsp;Boot (Windows&nbsp;10/&shy;Arch&nbsp;Linux)
        </li>
        <li>Laptop: Macbook Air M1 (2020)</li>
        <li>Phone: iPhone SE</li>
        <li>Watch: Apple Watch Series 7</li>
        <li>
          Peripherals: Samsung&nbsp;C24FG7x, 2&nbsp;x&nbsp;HP&nbsp;Z23i,
          Fnatic&nbsp;Gear Rush&nbsp;Pro (MX&nbsp;Silent&nbsp;Red),
          Ducky&nbsp;One&nbsp;2&nbsp;mini (MX&nbsp;Blue),
          Roccat&nbsp;Kone&nbsp;Aimo
        </li>
        <li>
          Sound: Focusrite Scarlett&nbsp;2i4, 2&nbsp;x&nbsp;Phonic&nbsp;P8A,
          Klipsch&nbsp;R-10SW, Sennheiser Mommentum Wireless&nbsp;M3,
          Sennheiser&nbsp;HD-25, SE&nbsp;Electronics&nbsp;X1A
        </li>
      </ul>
      <h2>Software & Fonts</h2>
      <ul>
        <li>
          IDE: I started with Sublime and then moved to RubyMine and will
          probably soon switch to WebStorm (since I mainly work with Typescript
          and React now). For my work at{' '}
          <Link
            href="https://www.lewagon.com/berlin"
            target="_blank"
            rel="noreferrer"
          >
            Le Wagon
          </Link>{' '}
          I use VSCode.
        </li>
        <li>
          Plugins & Theme: Material Theme UI (Material Darker), Atom Material
          Icons, Rainbow Brackets
        </li>
        <li>
          Font:{' '}
          <Link href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</Link>{' '}
          & Courier Prime on my website
        </li>
        <li>Browser: Firefox Developer Edition</li>
        <li>Terminal: iTerm</li>
      </ul>
    </section>
  )
}
