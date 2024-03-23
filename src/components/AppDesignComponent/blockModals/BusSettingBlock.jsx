//--------added 6th feb,23, no need anymore-------
//Ebetsu Version
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { appDesignerState, getSelectedPageData, getTransitionDestinationRouteList } from "../../../store/recoil/appDesignerState";
import { valueFormatCheck } from "../../../utilities/commonFunctions";
import SelectBox from "../../Form/FormInputs/SelectBox";
import TextBox from "../../Form/FormInputs/TextBox";
import ModalTitle from "../../Modal/components/ModalTitle";
import WhiteModalWrapper from '../../Modal/components/WhiteModalWrapper';
import InputContainer from "../../Wrapper/InputContainer";
import BlockModalFooter from "./BlockModalFooter";
        


export default function BusSettingBlock({ blockData = '', setModalOpen = () => { }, handleOnPressSave = () => { }, fieldKey = '' }) {
    const selectedPageDetail = useRecoilValue(getSelectedPageData);
    const transitionRoutes = useRecoilValue(getTransitionDestinationRouteList);
    const recoilStateValue = useRecoilValue(appDesignerState);
    const { activeTab, activePageId, tabItems } = recoilStateValue; 
    let numField = Array.from({ length: 257 }, (_, i) => i + 1);


    const [formData, setFormData] = useState(blockData); 

    function handleOnchange(e) {
        const name = e.target.name;
        const value = valueFormatCheck(e.target.value)

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <WhiteModalWrapper width="border-none text-black" className="items-start">
            <ModalTitle title="[江別]バス設定" className="text-blue-100 text-xl" />

            <Formik
                enableReinitialize={true}
                initialValues={formData}
            >
                <div className='relative w-full h-full'>
                    <Form onChange={handleOnchange}>
                        <div className="body-height3 pt-12 px-10 min-h-[calc(100vh-452px)] !p-0">
                            <div className="flex flex-col py-10">
                                <InputContainer>
                                    <SelectBox
                                        label="表示タイプ"
                                        name="displayType"
                                        labelClassName="text-blue-100"
                                        inputClassName="bg-blue-25"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </SelectBox>
                                </InputContainer>

                                <InputContainer>
                                    <TextBox label="ブロックカスタムClass"
                                        name="blockWrapCustomClass"
                                        placeholder="ブロックカスタムClass"
                                        labelClassName='text-blue-100'
                                        inputClassName='bg-blue-25'
                                    />
                                </InputContainer>
                            </div>
                        </div>

                        <BlockModalFooter
                            setModalOpen={() => setModalOpen(false)}
                            handleOnPressSave={(e) => handleOnPressSave(e, formData)}
                        />
                    </Form>
                </div>
            </Formik>
        </WhiteModalWrapper >
    )
}