import React, { useState } from 'react'
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

const columns = [
    {
        title: 'Марка Бетона',
        dataIndex: 'produst',
    },
    {
        title: 'Цена(Бартер )',
        dataIndex: 'priceB',
        sorter: {
            compare: (a, b) => a.priceB - b.priceB,
        },
    },
    {
        title: 'Цена(Наличка)',
        dataIndex: 'priceN',
        sorter: {
            compare: (a, b) => a.priceN - b.priceN,
        },
    },
    {
        title: 'Доставка',
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

];

const PriceList = () => {
    const [open, setOpen] = useState(false)
   
    return (
        <div>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h2 className="h2 mb-4">Наша продукция</h2>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <Card
                                data-aos={open ? 'fade-up' : ''}
                                hoverable
                                style={{
                                    overflow: "auto",
                                    width: "23%",
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b75} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В7.5 (М100)</h2>
                                <p>Бетон М100 или B7.5 относится к сорту с низким содержанием цемента. Смесь, которая относится к типу тощих бетонов.</p>
                            </Card>

                            <Card
                                data-aos={open ? 'fade-up' : ''}
                                hoverable
                                style={{
                                    width: "23%",
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b12} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В12.5 (М150)</h2>
                                <p>М150 используются в общем строительстве как подушка для автодорог с малой нагрузкой, выполняет роль подбетонки. </p>
                            </Card>

                            <Card
                                data-aos={open ? 'fade-up' : ''}
                                hoverable
                                style={{
                                    width: "23%",
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b15} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В15 (М200)</h2>
                                <p>
                                    В15 – это хорошо известная строителям марка М200, которая считается рядовой, то есть к ней не предъявляется никаких особых требований.
                                </p>
                            </Card>

                            <Card
                                data-aos={open ? 'fade-up' : ''}
                                hoverable
                                style={{
                                    width: "23%",
                                    cursor: "default"
                                }}
                                cover={<img alt="example" src={b20} />}
                            >
                                <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В20 (М250)</h2>
                                <p>Данная марка тяжёлого бетона является проходной по своим характеристикам и чаще используется в устройстве армопояса.</p>
                            </Card>
                            {open ? <>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        width: "23%",
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b22} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В22.5 (М300)</h2>
                                    <p>80% всех фундаментов частных строений сделано именно данной маркой. Данный бетон даже использовался для устройства фундаментов пятиэтажек в общем строительстве.</p>
                                </Card>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        width: "23%",
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b25} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В25 (М350)</h2>
                                    <p>Главной его сферой использования являются промышленные и коммерческие объекты. С его помощью создаются:данный вид смеси уже чаще используется в общем строительстве.</p>
                                </Card>
                                <Card
                                    data-aos={open ? 'fade-up' : ''}
                                    hoverable
                                    style={{
                                        width: "23%",
                                        cursor: "default"
                                    }}
                                    cover={<img alt="example" src={b30} />}
                                >
                                    <h2 className='text-gray-900  text-lg font-bold'>Товарный бетон класса В30 (М400)</h2>
                                    <p>Используется в основном для морозостойких, водостойких фундаментов и оснований, для заливки несущих конструкций относительно тяжелых строений, также применяется в тоннелях метро, эстакад, мостов.</p>
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
                                pagination={false}
                                columns={columns}
                                dataSource={data}
                                bordered
                                showSorterTooltip={false}
                                footer={() => 'Доставка осуществляется от 5-ти кубов см³ по всему г. Бишкек.'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PriceList