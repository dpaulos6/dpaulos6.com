import { createClient } from '@/utils/supabase/server'

export async function getCategorias() {
  const supabase = createClient()
  const { data, error } = await supabase.from('categorias').select()
  if (error) {
    throw new Error(error.message)
  }
  return data
}
