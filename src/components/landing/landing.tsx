import React from 'react'
import {Helmet} from 'react-helmet';
import {
  AiOutlineArrowRight
} from "react-icons/ai";
import ServiceImage from '../../assets/image/png/Frame 1000001757.png'
import Efficient from '../../assets/image/svg/efficient.svg';
import Security from '../../assets/image/svg/Rectangle.svg'
import Blockchain from '../../assets/image/svg/Blockchain.svg'
import Advanced from '../../assets/image/svg/iconoir_secure-window.svg'
import Transparent from '../../assets/image/svg/vaadin_file-process.svg'
import Easy from '../../assets/image/svg/tabler_hand-click.svg'
import Deposit from '../../assets/image/png/safe_deposit.png'
import Transation from '../../assets/image/png/Blockchain.png'
import Dispute from '../../assets/image/png/Rectangle.png'

export default function Landing() {

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Scrow | Bay</title>
      </Helmet>
      <div className='flex justify-center'>
        <div>
          <div className='bg-landing_gr pt-[164px] h-auto'>
            <div className='xl:pl-[137px]'>
              <div className='flex flex-col xl:flex-row relative'>
                <div className='font-bold text-gilroy flex flex-col xl:justify-start justify-center xl:items-start items-center xl:-mr-[70px]'>
                  <p className='text-[65px] max-w-[840px] -tracking-[2.5px]'><span className='text-dark_blue'>Secure</span> Your Transactions on Multiple <span className='text-dark_blue'>Blockchains</span></p>
                  <p className='text-black font-medium font-raleway text-[18px] max-w-[600px] mt-[20px]'>
                    Scrowbay is a trusted and secure escrow application that simplifies the process of exchanging goods and services. Our platform offers a seamless experience for buyers and sellers, ensuring that transactions are completed safely and efficiently.
                  </p>
                  <div className='mt-10'>
                    <button className='px-[30px] py-[15px] h-fit bg-[#0A2A5E] text-[18px] text-white rounded-[2px] flex w-fit justify-between gap-x-1 items-center'>
                      Get Started
                      <AiOutlineArrowRight className='ml-[2px]'/>
                    </button>
                  </div>
                </div>
                <div className='xl:-mt-[30px] relative xl:w-fit w-full flex xl:justify-end justify-center'>
                  <img className='' src = {ServiceImage} alt = "service" />
                </div>
              </div>
            </div>
            <div className='pt-[100px]'>
              <div className='justify-center w-full'>
                <div className='text-center justify-center'>
                  <p className='text-[60px] text-gilroy text-dark_blue leading-[70.13px] tracking-tight font-medium'>What we Offer?</p>
                </div>
                <div className='flex text-center justify-center pt-[15px] pb-[40px]'>
                  <p className='p-2 max-w-[550px] text-[#3E4581] font-medium'>Explore our comprehensive set of features, designed to make escrow transactions easy, secure, and efficient.</p>
                </div>
                <div className='flex justify-center pt-[40px] pb-[40px]'>
                  <div className='grid xl:grid-rows-2 grid-flow-col gap-8 lg:grid-rows-2 md:grid-rows-3 sm:grid-rows-6'>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Efficient} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>Efficient</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>Apps keep work and information right at your fingertips—and Slack keeps it all securely.</p>
                      </div>
                    </div>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Advanced} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>Advanced Features</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>Escrow features such as time-locks, arbitration, and dispute resolution.</p>
                      </div>
                    </div>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Security} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>Security First</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>Our platform uses blockchain technology to ensure that all transactions are secure and transparent.</p>
                      </div>
                    </div>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Transparent} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>Transparent</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>Our platform offers clear and concise explanations of each feature and function.</p>
                      </div>
                    </div>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Blockchain} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>BlockChain Based</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>With our blockchain technology, you can enjoy fast and secure transactions, with no middlemen.</p>
                      </div>
                    </div>
                    <div className='w-[282px] h-[270px] bg-white rounded-[10px] shadow-landing_card pt-[36px] pl-[35px] pr-[27px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#ECEEFF] flex justify-center items-center'>
                        <img className='w-[20px] h-[24px]' alt='efficient' src = {Easy} />
                      </div>
                      <div className='mt-[40px]'>
                        <p className='text-gilroy font-medium text-[20px] leading-[18px] text-[#3E4581]'>Eash to Use</p>
                        <p className='text-gilroy font-medium leading-[22px] text-[#3E4581] text-[16px] mt-[15px]'>From depositing funds to releasing payments, we offers a suite of tools to make transactions seamless.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[150px] pb-[20px] hidden xl:block'>
              <div className='pl-[185px] pr-[140px] flex justify-between'>
                <div>
                  <div className='font-gilory text-[60px] font-medium text-dark_blue'>How it Works?</div>
                  <p className='mt-[22px] w-[475px] h-[60px] font-[Inter] font-medium text-[16px] font-gilory leading-[30px] text-[#3E4581]'>Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                  <div className='mt-[60px] w-[475px] h-[580px] bg-[#FBF7F6] rounded-[25px]'>
                    <div className='pt-[60px] flex justify-center'>
                      <img className='w-[370px] h-[287px]' alt = "Deposit" src = {Deposit} />
                    </div>
                    <div className='text-[34px] leading-[40px] font-medium text-center text-[#3E4581] mt-[22px]'>Deposit funds</div>
                    <div className='flex justify-center'>
                      <p className='mt-[15px] text-center max-w-[325px] text-[18px] font-normal leading-[22px] text-[#3E4581]'>Users can deposit funds into the escrow account using a variety of payment methods. The funds are then held securely until the transaction is complete.</p>
                    </div>
                  </div>              
                </div>
                <div>
                  <div className='w-[520px] flex justify-start'>
                    <div className='w-[475px] h-[580px] bg-[#FEFDFF] rounded-[25px]'>
                      <div className='pt-[34px] flex justify-center'>
                        <img className='w-[296px] h-[296px]' alt = "Transaction" src = {Transation} />
                      </div>
                      <div className='text-[34px] leading-[40px] font-medium text-center text-[#3E4581] mt-[27px]'>Transaction execution</div>
                      <div className='flex justify-center'>
                        <p className='mt-[15px] text-center max-w-[325px] text-[18px] font-normal leading-[22px] text-[#3E4581]'>Once both parties agree to the terms of the transaction, the funds are released from the escrow account and the transaction is executed. This can include the transfer of assets, goods, or services.</p>
                      </div>  
                    </div>              
                  </div>
                  <div className='w-[520px] flex justify-end'>
                    <div className='mt-[90px] w-[475px] h-[580px] bg-[#FBF7F6] rounded-[25px]'>
                      <div className='pt-[64px] flex justify-center'>
                        <img className='w-[312px] h-[203px]' alt = "Deposit" src = {Dispute} />
                      </div>
                      <div className='text-[34px] leading-[40px] font-medium text-center text-[#3E4581] mt-[41px]'>Despute resolution</div>
                      <div className='flex justify-center'>
                        <p className='mt-[15px] text-center max-w-[325px] text-[18px] font-normal leading-[22px] text-[#3E4581]'>In the event of a dispute, the escrow service provides a platform for arbitration and mediation. If the dispute cannot be resolved, the funds can be returned to the appropriate party according to the terms of the agreement.</p>
                      </div>
                    </div>         
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[90px]'>
              <div>
                <div className='flex justify-center'><p className='text-gilroy text-[60px] text-center font-medium text-dark_blue max-w-[604px] leading-normal'>What Our Clients Say About Us</p></div>
                <div className='flex justify-center'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
