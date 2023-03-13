import { screen, render } from "@testing-library/react"
import { HomePage } from "../../modules/Home"
import { ThemeProvider } from "../../provider/ThemeProvider"

describe('first', () => {

  it('should be render home page', () => {
    render(<ThemeProvider><HomePage/></ThemeProvider>)
    screen.debug()
  })
 })
