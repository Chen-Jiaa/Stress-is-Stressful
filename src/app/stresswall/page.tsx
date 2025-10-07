import { createClient } from '@/lib/supabase/server'

import ClientSideContent from './ClientSideContent'
import PopUpTrigger from './PopUpTrigger'
import { Submission } from './types'

export const dynamic = 'force-dynamic'

async function getSubmissions() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('stress_submissions')
    .select('id, stress, name, prayers')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
    return null
  }

  return data as Submission[]
}

export default async function ContentPage() {
  const initialSubmissions = await getSubmissions()

  return (
    <>
      <ClientSideContent initialSubmissions={initialSubmissions} />
      <PopUpTrigger />
    </>
  )
}
