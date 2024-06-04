import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const SALayout = () => {
    return (
        <>
        <div>
            <section className='bg-neutral1 p-16'>
                <div>
                    <h1 className='text-center text-[53px] font-boska font-bold text-neutral4'>
                        Schedule Planning
                    </h1>
                    <h2 className='text-center text-[24px] font-switzer text-neutral3 pb-4'>
                        Please see your pre-wedding schedule here.
                    </h2>
                    <div className='border-b-2 border-neutral3 w-[260px] mx-auto mt-1 mb-16'></div>
                </div>
                <div className='font-switzer text-neutral4'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView='dayGridMonth'
                        headerToolbar={{
                            left: 'prev today',
                            center: 'title',
                            right: 'next'
                            // 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        height={1000}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        // initialEvents={[
                        //     { title: 'event 1', date: '2024-05-02' },
                        //     { title: 'event 2', date: '2024-08-01' },
                        //     { title: 'event 3', date: '2024-08-01' },
                        //     { title: 'event 4', date: '2024-08-01' },
                        //     { title: 'event 5', date: '2024-08-01' },
                        // ]}
                    />
                </div>
            </section>
        </div>
        </>
    )
}

export default SALayout

