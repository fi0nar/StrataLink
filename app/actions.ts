"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "../lib/supabase/server"
import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const supabase = createClient()

  const name = formData.get("name") as string
  const unit = formData.get("unit") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const preferredContact = formData.get("preferred-contact") as string

  try {
    const { error } = await supabase.from("contact_messages").insert({
      name,
      unit,
      email,
      phone,
      subject,
      message,
      preferred_contact: preferredContact,
      status: "new",
    })

    if (error) throw error

    revalidatePath("/contact")
    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

export async function submitMaintenanceRequest(formData: FormData) {
  const supabase = createClient()

  const title = formData.get("issue-title") as string
  const location = formData.get("location") as string
  const priority = formData.get("priority") as string
  const description = formData.get("description") as string
  const accessInstructions = formData.get("access-instructions") as string
  const contactPreference = formData.get("contact-preference") as string

  try {
    const { error } = await supabase.from("maintenance_requests").insert({
      title,
      location,
      priority,
      description,
      access_instructions: accessInstructions,
      contact_preference: contactPreference,
      status: "new",
    })

    if (error) throw error

    revalidatePath("/maintenance")
    return { success: true }
  } catch (error) {
    console.error("Error submitting maintenance request:", error)
    return { success: false, error: "Failed to submit request" }
  }
}

export async function bookAmenity(formData: FormData) {
  const supabase = createClient()

  const amenityId = formData.get("amenity-id") as string
  const date = formData.get("date") as string
  const startTime = formData.get("start-time") as string
  const endTime = formData.get("end-time") as string
  const guests = Number.parseInt(formData.get("guests") as string)
  const purpose = formData.get("purpose") as string

  try {
    const { error } = await supabase.from("amenity_bookings").insert({
      amenity_id: amenityId,
      booking_date: date,
      start_time: startTime,
      end_time: endTime,
      guests,
      purpose,
      status: "confirmed",
    })

    if (error) throw error

    revalidatePath("/amenities")
    return { success: true }
  } catch (error) {
    console.error("Error booking amenity:", error)
    return { success: false, error: "Failed to book amenity" }
  }
}

export async function login(formData: FormData): Promise<void> {
  const supabase = createClient()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    redirect("/dashboard")
  } catch (error) {
    console.error("Error logging in:", error)
    redirect("/login?error=Invalid email or password")
  }
}

export async function logout() {
  const supabase = createClient()

  try {
    const { error } = await supabase.auth.signOut()

    if (error) throw error

    redirect("/")
  } catch (error) {
    console.error("Error logging out:", error)
    return { success: false, error: "Failed to log out" }
  }
}
