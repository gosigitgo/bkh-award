'use client'
import {UserIcon} from "@heroicons/react/24/outline";
import RadioGroup from "./radio_group";

export default function PilihJenis() {
    return (
        <div className="flex flex-col w-full px-5 py-10 shadow my-10">
            <RadioGroup
                onChange={(option) => console.log(option)}
                labelText="Jenis Penghargaan"
                options={[ < div key = {
                    1
                }
                className = "flex flex-1 justify-around" > <span>
                    <strong>Inpiring Leader</strong><br/>
                    <span className="text-xs">Pejabat Struktural</span>
                </span> < UserIcon className = "w-10" /> </div>, < div key = {
                    2
                }
                className = "flex flex-1 justify-around" > <span>
                    <strong>Future Leader</strong><br/>
                    <span className="text-xs">Ketua Tim, Pejabat Non Struktural</span>
                </span> < UserIcon className = "w-10" /> </div>, < div key = {
                    3
                }
                className = "flex flex-1 justify-around" > <span>
                    <strong>Best Innovator</strong><br/>
                    <span className="text-xs">Seluruh pegawai</span>
                </span> < UserIcon className = "w-10" /> </div>
            ]}/>
        </div>
    )
}