package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
)

func main() {
	// Initialize a new Fiber app
	app := fiber.New()

	v1 := app.Group("/v1")

	v1.Get("/hello/test", func(c fiber.Ctx) error {
		// Send a string response to the client
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	// Start the server on port 3000
	log.Fatal(app.Listen(":8000"))

}
