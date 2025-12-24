import { db } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const docRef = await addDoc(collection(db, 'contact_messages'), {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: Timestamp.now(),
      status: 'unread',
    })
    
    console.log('Contact form submitted with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error submitting contact form: ', error)
    return { success: false, error }
  }
}