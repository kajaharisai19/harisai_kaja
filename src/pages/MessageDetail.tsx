import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc, updateDoc , Timestamp} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { ArrowLeft, Mail, Calendar, Trash2 } from 'lucide-react'
import type { DocumentData } from 'firebase/firestore'

interface ContactMessage extends DocumentData {
  id: string
  name: string
  email: string
  message: string
  timestamp: Timestamp
  status: 'read' | 'unread'
}

export default function MessageDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [message, setMessage] = useState<ContactMessage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMessage = async () => {
      if (!id) return

      try {
        const messageRef = doc(db, 'contact_messages', id)
        const messageSnap = await getDoc(messageRef)

        if (messageSnap.exists()) {
          const messageData = {
            id: messageSnap.id,
            ...messageSnap.data(),
          } as ContactMessage

          setMessage(messageData)

          if (messageData.status === 'unread') {
            await updateDoc(messageRef, { status: 'read' })
          }
        } else {
          navigate('/admin')
        }
      } catch (error) {
        console.error('Error fetching message:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessage()
  }, [id, navigate])

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return 'N/A'
    const date = timestamp.toDate()
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  const handleDelete = async () => {
    if (!message || !window.confirm('Are you sure you want to delete this message?')) return

    try {
      const { deleteDoc, doc } = await import('firebase/firestore')
      await deleteDoc(doc(db, 'contact_messages', message.id))
      navigate('/admin')
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (!message) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-gray-400">Message not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Messages
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>

        {/* Message Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gray-800/50 border-b border-gray-700 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white mb-2">{message.name}</h1>

                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href={`mailto:${message.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {message.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(message.timestamp)}</span>
                </div>
              </div>

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    message.status === 'unread'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {message.status === 'unread' ? 'New' : 'Read'}
                </span>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Message</h2>
            <div className="bg-gray-900 rounded-lg p-6">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{message.message}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gray-800/50 border-t border-gray-700 p-6">
            <div className="flex gap-4">
              <a
                href={`mailto:${message.email}`}
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Reply via Email
              </a>

              <button
                onClick={() => navigate('/admin')}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
