import { pulsar } from 'ldrs';

export const SpinnerPulsar = ({color}) => {
    
    pulsar.register();

    return (
        <l-pulsar
            size="40"
            speed="1.75"
            color={color}
        ></l-pulsar>
    )
}