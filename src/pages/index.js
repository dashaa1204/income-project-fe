import React from "react";

import DoughnutCard from "@/components/charts/DoughnutCard";
import BarCard from "@/components/charts/BarCard";

export default function Home() {
  return (
    <div className="w-[1440px] h-[1148px] relative bg-gray-100">
      <div className="w-96 h-[216px] left-[120px] top-[104px] absolute bg-blue-600 rounded-[18px]">
        <div className="left-[32px] top-[128px] absolute flex-col justify-start items-start inline-flex">
          <div className="opacity-50 text-center text-white text-base font-normal font-['Roboto'] leading-normal">
            Cash
          </div>
          <div className="text-center text-white text-2xl font-semibold font-['Roboto'] leading-loose">
            10,000,00
          </div>
        </div>
      </div>
      <div className="w-96 h-52 left-[528px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
          <div className="w-2 h-2 bg-lime-500 rounded-full" />
          <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
            Your Income
          </div>
        </div>
        <div className="self-stretch h-[152px] px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
          <div className="w-[186px] flex-col justify-start items-start gap-1 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="text-black text-4xl font-semibold font-['Roboto'] leading-10">
                1,200,000
              </div>
              <div className="text-black text-4xl font-semibold font-['Roboto'] leading-10">
                ₮
              </div>
            </div>
            <div className="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">
              Your Income Amount
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-black text-lg font-normal font-['Roboto'] leading-7">
              32% from last month
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-[216px] left-[936px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
            Total Expenses
          </div>
        </div>
        <div className="self-stretch h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="text-black text-4xl font-semibold font-['Roboto'] leading-10">
                -1,200,000
              </div>
              <div className="text-black text-4xl font-semibold font-['Roboto'] leading-10">
                ₮
              </div>
            </div>
            <div className="text-slate-500 text-lg font-normal font-['Roboto'] leading-7">
              Your Income Amount
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-black text-lg font-normal font-['Roboto'] leading-7">
              32% from last month
            </div>
          </div>
        </div>
      </div>
      <div className="h-[456px] w-[1200px] left-[120px] top-[652px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
        <div className="self-stretch px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
          <div className="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
            Last Records
          </div>
        </div>
        <div className="self-stretch h-[400px] px-6 flex-col justify-start items-start flex">
          <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Lending & Renting
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                  3 hours ago
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                -
              </div>
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                1,000₮
              </div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Lending & Renting
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                  3 hours ago
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                -
              </div>
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                1,000₮
              </div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Lending & Renting
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                  3 hours ago
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                -
              </div>
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                1,000₮
              </div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Lending & Renting
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                  3 hours ago
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                -
              </div>
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                1,000₮
              </div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-gray-200 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="w-10 h-10 relative">
                <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
              </div>
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Lending & Renting
                </div>
                <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                  3 hours ago
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                -
              </div>
              <div className="text-lime-500 text-base font-semibold font-['Roboto'] leading-normal">
                1,000₮
              </div>
            </div>
          </div>
        </div>
      </div>
      <BarCard />
      <DoughnutCard />
    </div>
  );
}
