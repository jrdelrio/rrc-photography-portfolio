import { pulsar } from 'ldrs';

export const SpinnerPulsar = ({color="white", size=40, speed="1.75"}) => {
    
    pulsar.register();

    return (
        <l-pulsar
            size={size}
            speed={speed}
            color={color}
        ></l-pulsar>
    )
}