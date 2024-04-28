import '@/app/globals.css'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text bg-[#eff0f5] relative z-[999]">
        <div
          className="min-w-[300px] h-auto p-12 flex flex-col gap-8 rounded-3xl bg-gradient-to-br from-[#eff0f5] to-[#e6e9f0]"
          style={{
            boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
          }}
        >
          <div
            className="flex mx-auto w-[200px] aspect-square rounded-full"
            style={{
              boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
            }}
          ></div>
          <div className="flex justify-between w-full">
            <div
              className="w-16 h-16 rounded-[1.25rem]"
              style={{
                boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
              }}
            ></div>
            <div
              className="w-16 h-16 rounded-[1.25rem]"
              style={{
                boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
              }}
            ></div>
            <div
              className="w-16 h-16 rounded-full"
              style={{
                boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
              }}
            ></div>
          </div>
          <div
            className="flex h-[50px] w-full rounded-full"
            style={{
              boxShadow:
                'inset 7.5px 7.5px 10px #0002, inset -7.5px -7.5px 10px #fff'
            }}
          ></div>
          <div
            className="flex h-[50px] w-full rounded-full"
            style={{
              boxShadow: '7.5px 7.5px 10px #0002, -7.5px -7.5px 10px #fff'
            }}
          ></div>
        </div>
        <div
          className="min-w-[300px] h-auto p-12 flex flex-col gap-8 rounded-3xl bg-gradient-to-br from-gray-950/5 to-gray-900 hidden"
          style={{
            boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
          }}
        >
          <div
            className="flex mx-auto w-[200px] aspect-square rounded-full"
            style={{
              boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
            }}
          ></div>
          <div className="flex justify-between w-full">
            <div
              className="w-16 h-16 rounded-[1.25rem]"
              style={{
                boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
              }}
            ></div>
            <div
              className="w-16 h-16 rounded-[1.25rem]"
              style={{
                boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
              }}
            ></div>
            <div
              className="w-16 h-16 rounded-full"
              style={{
                boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
              }}
            ></div>
          </div>
          <div
            className="flex h-[50px] w-full rounded-full"
            style={{
              boxShadow:
                'inset 7.5px 7.5px 10px #0006, inset -7.5px -7.5px 10px #fff1'
            }}
          ></div>
          <div
            className="flex h-[50px] w-full rounded-full"
            style={{
              boxShadow: '7.5px 7.5px 10px #0006, -7.5px -7.5px 10px #fff1'
            }}
          ></div>
        </div>
        <button className="px-0.5 py-3 bg-gradient-to-b from-white to-blue-200 rounded-3xl hidden">
          <div className="flex justify-center w-96 h-16 bg-blue-100 rounded-3xl items-center px-4 py-2 -mt-1.5">
            <span className="text-transparent text-3xl">Clicky</span>
          </div>
        </button>
        <button className="pl-2 pb-2 bg-green-700 rounded-3xl hover:pl-1 hover:pb-1 hover:mt-1 hover:mr-1 group transition-all duration-75 hidden">
          <div className="flex justify-center w-96 h-16 bg-green-600 items-center px-4 py-2 rounded-[1.25rem] group-hover:rounded-3xl transition-all duration-75">
            <span className="text-transparent text-3xl">Clicky</span>
          </div>
        </button>
      </div>
    </>
  )
}
