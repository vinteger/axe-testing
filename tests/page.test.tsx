import Home from "@/app/page";
import {render} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe"

expect.extend(toHaveNoViolations)

describe("Home page", () => {
    it("should have no axe accessibility violations", async() => {
        const {container} = render(<Home />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
})