/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form-nextjs"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { sendNotification, sendReceipt } from "@/app/actions/message"
import { Textarea } from "@/components/ui/textarea"
import posthog from "posthog-js"

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 2 characters.")
    .max(64, "Name must be at most 64 characters."),
  email: z
    .email("Please enter a valid email address.")
    .max(64, "Email must be at most 64 characters."),
  message: z
    .string()
    .min(1, "Message must be at least 10 characters.")
    .max(1000, "Message must be at most 1000 characters."),
})

export type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }: { value: FormData }) => {
      try {
        const info = await sendNotification(value);
        if (info?.accepted?.length > 0) {
          posthog.capture('form_submitted', { form: 'contact', has_message: value.message.length > 0 })
          posthog.identify(value.email)
        } else {
          posthog.capture('form_submission_failed', { form: 'contact' })
        }
        form.reset();
      } catch (error) {
        posthog.capture('form_submission_error', {
          form: 'contact',
          error: (error as Error).message,
          message: value.message,
        })
      }
    }
  })

  return (
    <Card className="w-full sm:max-w-md">
      {/* <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Have a question or want to work together? Send us a message.
        </CardDescription>
      </CardHeader> */}
      <CardContent>
        <form
          id="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name <span className="text-destructive">*</span></FieldLabel>
                    <Input
                      required
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Jane Smith"
                      autoComplete="name"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email <span className="text-destructive">*</span></FieldLabel>
                    <Input
                      required
                      id={field.name}
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="jane@example.com"
                      autoComplete="email"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="message"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Message <span className="text-destructive">*</span></FieldLabel>
                    <Textarea
                      required
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="min-h-24 resize-none"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="contact-form">
            Send Message
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
