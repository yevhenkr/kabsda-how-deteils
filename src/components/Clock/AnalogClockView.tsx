import * as React from 'react';
import s from './style.module.css';

export const AnalogClockView = () => {
    const [time, setTime] = React.useState(() => {
        var currentDate = new Date();
        return {
            hours: currentDate.getHours(),
            minutes: currentDate.getMinutes(),
            seconds: currentDate.getSeconds(),
        };
    });

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const currenTimeObject = {
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            };
            setTime(currenTimeObject);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <div className={s.clock_wrapper}>
                <div className={s.clock}>
                    <div
                        className={s.hours}
                        style={{
                            transform: `rotate(${time.hours * 30 - 90}deg) translateX(-10px)`,
                        }}
                    ></div>
                    <div
                        className={s.minutes}
                        style={{
                            transform: `rotate(${time.minutes * 6 - 90}deg) translateX(-15px)`,
                        }}
                    ></div>
                    <div
                        className={s.seconds}
                        style={{
                            transform: `rotate(${time.seconds * 6 - 90}deg) translateX(-15px)`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}