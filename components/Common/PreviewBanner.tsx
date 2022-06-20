import Link from 'next/link'
import { useRouter } from "next/router";

function PreviewBanner() {
  const route = useRouter();
  
  return (
    <div className='flex space-x-10 w-full h-[40px] bg-black text-white text-lg items-center justify-center'>
      <span>PREVIEW MODE ENABLED</span>
      <Link
        prefetch={false}
        href={`/api/exit-preview?url=${route.asPath}`}
      >
        <a className='bg-white text-black rounded px-5 py-7'>
          EXIT PREVIEW MODE
        </a>
      </Link>
    </div>
  )
}

export default PreviewBanner