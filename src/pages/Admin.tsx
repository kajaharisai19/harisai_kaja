/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { auth, db } from '../lib/firebase'
import { signOut } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore'
import { Mail, Trash2, CheckCircle, LogOut, Loader } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ContactMessage extends DocumentData {
  id: string
  name: string
  email: string
  message: string
  timestamp: any
  status: 'read' | 'unread'
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribeAuth()
  }, [])

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, 'contact_messages'),
      orderBy('timestamp', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData: ContactMessage[] = []
      snapshot.forEach((doc) => {
        messagesData.push({
          id: doc.id,
          ...doc.data(),
        } as ContactMessage)
      })
      setMessages(messagesData)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const markAsRead = async (messageId: string) => {
    try {
      const messageRef = doc(db, 'contact_messages', messageId)
      await updateDoc(messageRef, {
        status: 'read',
      })
    } catch (error) {
      console.error('Error marking as read:', error)
    }
  }

  const deleteMessage = async (messageId: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return
    }

    try {
      await deleteDoc(doc(db, 'contact_messages', messageId))
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A'
    const date = timestamp.toDate()
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader className="w-8 h-8 text-blue-400 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">Total Messages</h3>
            <p className="text-3xl font-bold text-white">{messages.length}</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">Unread</h3>
            <p className="text-3xl font-bold text-blue-400">
              {messages.filter((m) => m.status === 'unread').length}
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">Read</h3>
            <p className="text-3xl font-bold text-green-400">
              {messages.filter((m) => m.status === 'read').length}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-4">Contact Messages</h2>
          
          {messages.length === 0 ? (
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
              <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No messages yet</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`bg-gray-800 border rounded-lg p-6 transition-colors ${
                  message.status === 'unread'
                    ? 'border-blue-600'
                    : 'border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {message.name}
                      </h3>
                      {message.status === 'unread' && (
                        <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{message.email}</p>
                    <p className="text-gray-500 text-xs">
                      {formatDate(message.timestamp)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {message.status === 'unread' && (
                      <button
                        onClick={() => markAsRead(message.id)}
                        className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        title="Mark as read"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(message.id)}
                      className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}