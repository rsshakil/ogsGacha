//--------added 6th feb,23, no need anymore-------
//Ebetsu Version

import React, { useEffect, useState } from "react";

import { Form, Formik } from "formik";
import { useRecoilValue } from "recoil";

import {
    fullWidthNumber, inputTypes, readOnlyDropDownItems,
    requiredDropDownItems
} from '../../../lib/commonConstants';
import {
    autoComplete, inputMode
} from '../../../lib/tailwindClassAttributes';
import { getFieldDropDownItemsByFieldType } from '../../../services/appDesignerService';
import { getSelectedPageData, getTransitionDestinationRouteList } from "../../../store/recoil/appDesignerState";
import { valueFormatCheck } from "../../../utilities/commonFunctions";
import SelectBox from "../../Form/FormInputs/SelectBox";
import TextBox from "../../Form/FormInputs/TextBox";
import Loader from "../../Loading/Loader";
import ModalTitle from "../../Modal/components/ModalTitle";
import WhiteModalWrapper from '../../Modal/components/WhiteModalWrapper';
import InputContainer from "../../Wrapper/InputContainer";
import BlockModalFooter from "./BlockModalFooter";


export default function InputTextSettingsBlock({ blockData = '', setModalOpen = () => { }, handleOnPressSave = () => { },uniqueError={} }) {
    const selectedPageDetail = useRecoilValue(getSelectedPageData);
    const transitionRoutes = useRecoilValue(getTransitionDestinationRouteList);
    const [dropDownItemData, setDropDownItems] = useState([]);
    const [fieldList, setFieldList] = useState([]);
    const [loading, setLoading] = useState(true);


    async function getFileterItemsByFieldType() {
        const projectId = window.sessionStorage.getItem("currentProjectId");
         
        const { data, status } = await getFieldDropDownItemsByFieldType(projectId, 0);
        if (status == 200) {
            let { records = [] } = data || [];
            setDropDownItems(records);
            setFieldList(records);
        }

        setLoading(false);
    }
    useEffect(() => {
        getFileterItemsByFieldType();
    }, []); 


    const [formData, setFormData] = useState(blockData); 
    function handleOnchange(e) {
        const name = e.target.name;
        const value = valueFormatCheck(e.target.value);

        // area1FieldIdの場合にフィールドコードを取得したい
        let fieldName = "fieldCode";
        let fieldCode = "";
        if (e.target.name === "area1FieldId") {
            // フィールドコードを取得
            const findField = fieldList.find(x => x.fieldId === +value);
            fieldName = "area1FieldCode"
            fieldCode = findField.fieldCode;
        }
        else if (e.target.name === "area2FieldId") {
            // フィールドコードを取得
            const findField = fieldList.find(x => x.fieldId === +value);
            fieldName = "area2FieldCode"
            fieldCode = findField.fieldCode;
        }
        else if (e.target.name === "area3FieldId") {
            // フィールドコードを取得
            const findField = fieldList.find(x => x.fieldId === +value);
            fieldName = "area3FieldCode"
            fieldCode = findField.fieldCode;
        } 
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
            [fieldName]: fieldCode
        }))
    }
    let numField = Array.from({ length: formData.columns }, (_, i) => i + 1);
    let MaxlengthList = Array.from({ length: 257 }, (_, i) => i + 1);

    return (
        <>
            {loading && <Loader />}

            <WhiteModalWrapper width="border-none text-black" className="items-start">
                <ModalTitle title="[江別]入力設定" className="text-blue-100 text-xl" />

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
                                            label="横並び個数"
                                            name="columns"
                                            labelClassName="text-blue-100"
                                            inputClassName="bg-blue-25"
                                            value={formData.columns}
                                            onChange={handleOnchange}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                        </SelectBox>
                                    </InputContainer>


                                    {numField.length > 0 && numField.map((number, index) => (
                                        <>
                                            <label htmlFor="headerAreaShadow" className="text-blue-100 !mb-8 !mt-8">入力エリア{fullWidthNumber[number]}</label>
                                            <div className="px-8 pb-4">
                                                <InputContainer>
                                                    <SelectBox
                                                        label="対象フィールド "
                                                        name={`area${number}FieldId`}
                                                        labelClassName="text-blue-100"
                                                        inputClassName="bg-blue-25"
                                                        onChange={handleOnchange}
                                                    >
                                                        {dropDownItemData.map(x => <option key={x.fieldId} value={x.fieldId}>{x.fieldName}</option>)}
                                                    </SelectBox>
                                                </InputContainer>

                                                <InputContainer>
                                                    <TextBox label="許可パターン正規表現"
                                                        name={`area${number}RegularExpressions`}
                                                        inputMode='katakana'
                                                        labelClassName='text-blue-100'
                                                        inputClassName='bg-blue-25'
                                                        placeholder="許可パターン正規表現"
                                                    />

                                                </InputContainer>

                                                <InputContainer>
                                                    <TextBox label="ラベル"
                                                        name={`area${number}Label`}
                                                        labelClassName='text-blue-100'
                                                        inputClassName='bg-blue-25'
                                                        placeholder="ラベル"
                                                    />
                                                </InputContainer>

                                                <div className="flex">
                                                    <div className="w-1/5 pr-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`必須`}
                                                                name={`area${number}Required`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {requiredDropDownItems.length > 0 &&
                                                                    requiredDropDownItems.map((field, index) => (
                                                                        <option
                                                                            value={field.value}
                                                                            key={field.value + "_" + index}>
                                                                            {field.caption}
                                                                        </option>
                                                                    )
                                                                    )}
                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <TextBox
                                                                label={`value（初期値）`}
                                                                name={`area${number}Value`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                placeholder="value"
                                                            />
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <TextBox label="placeholder"
                                                                name={`area${number}Placeholder`}
                                                                placeholder="placeholder"
                                                                labelClassName='text-blue-100 text-xs'
                                                                inputClassName='bg-blue-25'
                                                            />
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`maxlength(最大文字数) `}
                                                                name={`area${number}Maxlength`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {MaxlengthList.map((n, i) => <option key={i} value={i}>{i}</option>)}

                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 pl-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`入力モード`}
                                                                name={`area${number}InputMode`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {inputMode.length > 0 &&
                                                                    inputMode.map((field, index) => (
                                                                        <option
                                                                            value={field.value}
                                                                            key={field.value + "_" + index}>
                                                                            {field.caption}
                                                                        </option>
                                                                    )
                                                                    )}
                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>


                                                </div>

                                                <div className="flex">
                                                    <div className="w-1/5 pr-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`readonly`}
                                                                name={`area${number}ReadOnly`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {readOnlyDropDownItems.length > 0 &&
                                                                    readOnlyDropDownItems.map((field, index) => (
                                                                        <option
                                                                            value={field.value}
                                                                            key={field.value + "_" + index}>
                                                                            {field.caption}
                                                                        </option>
                                                                    )
                                                                    )}
                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <TextBox
                                                                label={`エラー時テキスト `}
                                                                name={`area${number}ErrorText`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                placeholder="エラー時テキスト"
                                                            />
                                                        </InputContainer>

                                                    </div>

                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`type属性`}
                                                                name={`area${number}InputType`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {inputTypes.map((field, index) => (
                                                                    <option
                                                                        value={field.value}
                                                                        key={field.value + "_" + index}>
                                                                        {field.caption}
                                                                    </option>
                                                                )
                                                                )}

                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>
                                                    <div className="w-1/5 px-2">
                                                        <InputContainer>
                                                            <TextBox label="name属性"
                                                                name={`area${number}Name`}
                                                                labelClassName='text-blue-100 text-xs'
                                                                inputClassName='bg-blue-25'
                                                                placeholder="name属性"
                                                                isRequired
                                                            />
                                                        </InputContainer>

                                                    </div>


                                                    <div className="w-1/5 pl-2">
                                                        <InputContainer>
                                                            <SelectBox
                                                                label={`autocomplete属性`}
                                                                name={`area${number}AutoComplete`}
                                                                labelClassName="text-blue-100 text-xs"
                                                                inputClassName="bg-blue-25"
                                                                onChange={handleOnchange}
                                                            >
                                                                {autoComplete.length > 0 &&
                                                                    autoComplete.map((field, index) => (
                                                                        <option
                                                                            value={field.value}
                                                                            key={field.value + "_" + index}>
                                                                            {field.caption}
                                                                        </option>
                                                                    )
                                                                    )}

                                                            </SelectBox>
                                                        </InputContainer>

                                                    </div>


                                                </div>
                                                <InputContainer>
                                                    <TextBox label="areaWrapカスタムクラス"
                                                        name={`area${number}WrapCustomClass`}
                                                        labelClassName='text-blue-100'
                                                        inputClassName='bg-blue-25'
                                                        placeholder="areaWrapカスタムクラス"
                                                    />
                                                </InputContainer>
                                            </div>
                                        </>
                                    ))
                                    }

                                    <InputContainer>
                                        <TextBox label="blockWrapカスタムクラス"
                                            name="blockWrapCustomClass"
                                            labelClassName='text-blue-100'
                                            inputClassName='bg-blue-25'
                                            placeholder="blockWrapカスタムクラス"
                                        />
                                    </InputContainer>
                                </div>
                            </div>

                            <BlockModalFooter
                                errors={uniqueError}
                                setModalOpen={() => setModalOpen(false)}
                                handleOnPressSave={(e) => handleOnPressSave(e, formData)}
                            />
                        </Form>
                    </div>
                </Formik>
            </WhiteModalWrapper >
        </>
    )
}