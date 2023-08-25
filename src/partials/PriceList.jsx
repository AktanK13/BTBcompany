import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Card, Table } from 'antd';

import { BsArrowUpSquareFill, BsArrowDownSquareFill } from 'react-icons/bs'

import b75 from '../public/images/7.5m100.webp';
import b12 from '../public/images/12.5m150.webp';
import b15 from '../public/images/b15m200.webp';
import b20 from '../public/images/b20m250.webp';
import b22 from '../public/images/b22m300.webp';
import b25 from '../public/images/b25m350.webp';
import b30 from '../public/images/b30m400.webp';

const { Meta } = Card;



const PriceList = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()
    const columns = [
        {
            title: `${t("class")}`,
            dataIndex: 'produst',
        },
        {
            title: `${t("price")}(Бартер) за 1 м³`,
            dataIndex: 'priceB',
            sorter: {
                compare: (a, b) => a.priceB - b.priceB,
            },
        },
        {
            title: `${t("price")}(Наличка) за 1 м³`,
            dataIndex: 'priceN',
            sorter: {
                compare: (a, b) => a.priceN - b.priceN,
            },
        },
        {
            title: `${t("delivery")}`,
            dataIndex: 'delivery',
        },
    ];
    const data = [
        {
            key: '1',
            produst: 'M-100',
            priceB: 3700,
            priceN: 3400,
            delivery: '600 за 1м³'
        },
        {
            key: '2',
            produst: 'M-150',
            priceB: 4000,
            priceN: 3600,
            delivery: '600 за 1м³'
        },
        {
            key: '3',
            produst: 'M-200',
            priceB: 4200,
            priceN: 3900,
            delivery: '600 за 1м³'
        },
        {
            key: '4',
            produst: 'M-250',
            priceB: 4500,
            priceN: 4200,
            delivery: '600 за 1м³'
        },
        {
            key: '5',
            produst: 'M-300',
            priceB: 4800,
            priceN: 4400,
            delivery: '600 за 1м³'
        },
        {
            key: '6',
            produst: 'M-350',
            priceB: 5000,
            priceN: 4700,
            delivery: '600 за 1м³'
        },
        {
            key: '7',
            produst: 'M-10',
            priceB: 1900,
            priceN: 1900,
            delivery: '600 за 1м³'
        },
    
    ]
    return (
        <div id='products'>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h2 className="h2 mb-4">{t("ourproduct")}</h2>
                        </div>
                        <div className='min-w-full mx-auto grid gap-4 md:grid-cols-3 lg:grid-cols-3 items-start justify-center md:max-w-2xl lg:max-w-none'>
                            <Card
                                data-aos='fade-up'
                                hoverable
                                style={{
                                    minHeight: '515px',
                                    maxWidth: '300px',
                                    overflow: "auto",
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b75} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>{t("75")}</h2>
                                <p>{t("75text")}</p>
                            </Card>

                            <Card
                                data-aos='fade-up'
                                hoverable
                                style={{
                                    minHeight: '515px',
                                    maxWidth: '300px',
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b12} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>{t("12")}</h2>
                                <p> {t("12text")}</p>
                            </Card>

                            <Card
                                data-aos='fade-up'
                                hoverable
                                style={{
                                    minHeight: '515px',
                                    maxWidth: '300px',
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b15} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>{t("15")}</h2>
                                <p>{t("15text")}</p>
                            </Card>
                            {open ? <>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        minHeight: '515px',
                                        maxWidth: '300px',
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b20} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>{t("20")}</h2>
                                    <p>{t("20text")}</p>
                                </Card>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        minHeight: '515px',
                                        maxWidth: '300px',
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b22} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>{t("22")}</h2>
                                    <p>{t("22text")}</p>
                                </Card>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        minHeight: '515px',
                                        maxWidth: '300px',
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b25} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>{t("25")}</h2>
                                    <p>{t("25text")}</p>
                                </Card>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        minHeight: '515px',
                                        maxWidth: '300px',
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b30} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>{t("30")}</h2>
                                    <p>{t("30text")}</p>
                                </Card>
                            </>
                                :
                                <></>
                            }
                        </div>
                        <div className='flex justify-end mt-8 text-3xl'>
                            <button onClick={() => setOpen(!open)} className='transition ease-in-out'>
                                {open ? <BsArrowUpSquareFill /> : <BsArrowDownSquareFill />}
                            </button>
                        </div>

                        <div className='mt-20' data-aos="zoom-y-out">
                            <Table
                                id='price'
                                pagination={false}
                                columns={columns}
                                dataSource={data}
                                bordered
                                showSorterTooltip={false}
                                footer={() => t("delivery_date")}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PriceList