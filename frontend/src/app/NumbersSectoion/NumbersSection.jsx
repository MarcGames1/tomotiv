import React from 'react'
import { BsCreditCard } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import {TbHandClick} from 'react-icons/tb'
import Hands from '@/components/svg/Hands';
const NumbersSection = () => {
  return (
    <div className="bg-base-100 w-screen flex flex-col sm:flex-row md:flex-row">
      <div className=" prose   m-10 basis-1/2">
        <h2>
          Investim în <span className="text-primary">educația românilor</span>
        </h2>
        <p>
          Ne propunem ca până în anul 2026 să contribuim la educare și formarea
          românilor care își doresc să activeze în domeniul marketingului
          digital.
        </p>
      </div>
      <div className="flex flex-row flex-wrap   items-center ">
        <IconAndNumber
          icon={<IoIosPeople size={'5em'} className="text-primary" />}
          number={'2 028'}
          text={'de români educați'}
        />
        <IconAndNumber
          icon={
            <Hands className={'text-primary'} width={'5em'} height={'5em'} />
          }
          number={'46 328'}
          text={'de oameni în comunitate'}
        />
        <IconAndNumber
          icon={<TbHandClick size={'5em'} className="text-primary" />}
          number={'828 867'}
          text={'de mulțumiri'}
        />
        <IconAndNumber
          icon={<BsCreditCard size={'5em'} className="text-primary" />}
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
      <div className="flex basis-6/12 md:p-10 sm:p-10	lg:gap-10 items-center ">
        {icon}
        <div>
          <span className="font-bold text-xl">{number}</span>
          <p className="">{text}</p>
        </div>
      </div>
    );
}