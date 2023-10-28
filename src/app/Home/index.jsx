import { useState } from "react";
import ravenclow from "../../assets/ravenclow.png"

export default function Home() {
    const [values, setValues] = useState({});
    const [result, setResult] = useState('');

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setValues({ ...values, [property]: value });
    };

    const calculateVector = (e) => {
        e.preventDefault();
        const resultSum = (values.x * values.x) + (values.y * values.y)
        setResult(Math.sqrt(resultSum));
    };

    return (
        <section className="w-full h-full flex items-center flex-col py-8 px-4 bg-[#09122c] text-[#fefefe]">

            <img src={ravenclow} alt="ravenclow" className="w-[100px] drop_shadow" />
            <h1 className="text-3xl font-bold text-center">
                ¡Calcula el Vector!
            </h1>

            <h2 className="text-center text-xl text-[#bebebe]">Formula para calcular el Vector:</h2>

            <div className="my-6 w-fit flex items-center p-4 rounded-lg text-center text-xl font-semibold bg-[#222f5b]">
                <span className="border-x-2 px-1 border-x-[#bebebe] text-[#946b2d]">V</span>
                <span className="px-1">=</span>
                <p className="w-full flex">
                    <span className="text-[#bebebe] flex">
                        {result === '' ?
                            (
                                <>
                                    <span className="text-[#bebebe] flex">
                                        X
                                        <i className="text-sm text-[#ffffff]">2</i>
                                    </span>
                                    <span className="px-1">+</span>
                                    <span className="text-[#bebebe] flex">
                                        Y
                                        <i className="text-sm text-[#ffffff]">2</i>
                                    </span>
                                </>
                            )
                            : result
                        }
                    </span>
                </p>
            </div>

            <form className="flex flex-col gap-2">
                <label className="px-4 rounded-sm border-b-2 border-[#946b2d]">
                    <span className="font-semibold text-2xl pr-2 text-[#946b2d]">
                        x:
                    </span>
                    <input
                        required
                        name="x"
                        type="number"
                        onChange={handleChange}
                        placeholder="Valor de x"
                        className="text-[#bebebe] outline-none bg-transparent"
                    />
                </label>

                <label className="px-4 rounded-sm border-b-2 border-[#946b2d]">
                    <span className="font-semibold text-2xl pr-2 text-[#946b2d]">
                        y:
                    </span>
                    <input
                        required
                        name="y"
                        type="number"
                        onChange={handleChange}
                        placeholder="Valor de y"
                        className="text-[#bebebe] outline-none bg-transparent"
                    />
                </label>
                <input
                    onClick={calculateVector}
                    type="submit"
                    value="Calcular V"
                    className="rounded-lg p-2 cursor-pointer font-semibold text-[#fefefe] bg-[#946b2d] hover:shadow-md hover:shadow-[#222f5b]"
                />

            </form>

        </section>
    )
}
