import { supabase } from '@/lib/supabase'

export async function getPlans() {
  // [Nam] chỗ này anh bỏ qua "error" của Supabase rồi nè, nên query fail
  // (mất mạng, sai bảng,...) thì nó im lặng trả về [] luôn,
  // UI nhìn vào tưởng đâu là plans rỗng thiệt chứ không biết đang lỗi
  const { data } = await supabase.from('plans').select()
  return data ?? []
}
