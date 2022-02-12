import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import SettingsIcon from '/public/icons/icon-settings.svg';
import Modal from "../Modal";
import NumberInput from "../NumberInput";
import FontSelect from "../../containers/FontSelect";
import ColorSelect from "../../containers/ColorSelect";
import {useForm, Controller} from "react-hook-form";

const Settings = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { handleSubmit, control } = useForm();

    const onOpen = useCallback(() => {
        setModalOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setModalOpen(false);
    }, []);

    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <div className={styles.settings}>
            <button className={styles.settingsButton}
                    aria-label={'settings'}
                    onClick={onOpen}
            >
                <SettingsIcon/>
            </button>
            {modalOpen && (
                <Modal title={'Settings'}
                       onClose={onClose}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <GroupBox title={'Time (Minutes)'}>
                                <div className={styles.inputFieldContainer}>
                                    <Controller name={'pomodoro'}
                                                control={control}
                                                defaultValue={25}
                                                render={({field}) => (
                                                    <InputField name={'pomodoro'}
                                                                label={'pomodoro'}
                                                                {...field}
                                                    />
                                                )}
                                    />
                                    <Controller name={'shortBreak'}
                                                control={control}
                                                defaultValue={5}
                                                render={({field}) => (
                                                    <InputField name={'shortBreak'}
                                                                label={'short break'}
                                                                {...field}
                                                    />
                                                )}
                                    />
                                    <Controller name={'longBreak'}
                                                control={control}
                                                defaultValue={15}
                                                render={({field}) => (
                                                    <InputField name={'longBreak'}
                                                                label={'long break'}
                                                                {...field}
                                                    />
                                                )}
                                    />
                                </div>
                            </GroupBox>
                            <GroupBox title={'Font'}>
                                <Controller name={'font'}
                                            control={control}
                                            defaultValue={'Kumbh Sans'}
                                            render={({field}) => (
                                                <FontSelect className={styles.select}
                                                            name={'font'}
                                                            fontFamily={['Kumbh Sans', 'Roboto Slab', 'Space Mono']}
                                                            {...field}
                                                />
                                            )}
                                />
                            </GroupBox>
                            <GroupBox title={'Color'}>
                                <Controller name={'color'}
                                            control={control}
                                            defaultValue={'#F87070'}
                                            render={({field}) => (
                                                <ColorSelect className={styles.select}
                                                             name={'color'}
                                                             colors={['#F87070', '#70F3F8', '#D881F8']}
                                                             {...field}
                                                />
                                            )}
                                />
                            </GroupBox>
                        </div>
                        <button className={styles.applyButton}
                                type={'submit'}
                        >
                            Apply
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

const InputField = ({ label, ...props }) => {
    return (
        <div className={styles.inputFieldWrapper}>
            <label>
                {label}
            </label>
            <div className={styles.numberInputWrapper}>
                <NumberInput {...props} />
            </div>
        </div>
    );
};

const GroupBox = ({ title, children }) => {
    return (
        <div className={styles.groupWrapper}>
            <div className={styles.groupTitle}>
                {title}
            </div>
            {children}
        </div>
    );
};

export default Settings;
