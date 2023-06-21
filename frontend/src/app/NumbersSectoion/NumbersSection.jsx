import React from 'react'
import { BsCreditCard } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import {TbHandClick} from 'react-icons/tb'
import Hands from '@/components/svg/Hands';
const NumbersSection = () => {
  return (
    <div className="bg-base-100 w-screen flex flex-col sm:flex-row md:flex-row">
      <div className=" prose self-center p-5  my-10 ">
        <h2 className="">
          Investim în <span className="text-primary">educația românilor</span>
        </h2>
        <p>
          Ne propunem ca până în anul 2026 să contribuim la educare și formarea
          românilor care își doresc să activeze în domeniul marketingului
          digital.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5 items-center ">
        <IconAndNumber
          icon={<IoIosPeople size={'3em'} className="text-primary" />}
          number={'2 028'}
          text={'de români educați'}
        />
        <IconAndNumber
          icon={
            <Hands className={'text-primary'} width={'3em'} height={'3em'} />
          }
          number={'46 328'}
          text={'de oameni în comunitate'}
        />
        <IconAndNumber
          icon={<TbHandClick size={'3em'} className="text-primary" />}
          number={'828 867'}
          text={'de mulțumiri'}
        />
        <IconAndNumber
          icon={<BsCreditCard size={'3em'} className="text-primary" />}
          number={'1 926 436'}
          text={'de reușite împreună cu dumneavoastră.'}
        />
      </div>
    </div>
  );
}

export default NumbersSection

const IconAndNumber = ({icon, number, text}) =>{
    return (
      <div className="flex gap-5 md:p-10 sm:p-10 py-4	lg:gap-10 items-center ">
        {icon}
        <div>
          <span className="font-bold text-xl">{number}</span>
          <p className="">{text}</p>
        </div>
      </div>
    );
}