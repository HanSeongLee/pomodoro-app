import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import SettingsIcon from '/public/icons/icon-settings.svg';
import Modal from "../Modal";
import NumberInput from "../NumberInput";
import FontSelect from "../../containers/FontSelect";
import ColorSelect from "../../containers/ColorSelect";
import {useForm, Controller} from "react-hook-form";
import {useAppContext} from "../../context/AppContext";
import cn from "classnames";

const Settings = () => {
    const [state, dispatch] = useAppContext();
    const [modalOpen, setModalOpen] = useState(false);
    const { handleSubmit, control } = useForm();

    const onOpen = useCallback(() => {
        setModalOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setModalOpen(false);
    }, []);

    const onSubmit = useCallback(({
                                      pomodoro, shortBreak, longBreak, font,
                                      color
                                  }) => {
        dispatch({
            type: 'set_settings',
            value: {
                time: {
                    pomodoro,
                    'short break': shortBreak,
                    'long break': longBreak,
                },
                font,
                color,
            }
        });
        setModalOpen(false);
    }, [dispatch]);

    return (
        <div className={styles.settings}>
            <button className={styles.settingsButton}
                    aria-label={'settings'}
                    onClick={onOpen}
            >
                <SettingsIcon/>
            </button>
            <Modal title={'Settings'}
                   onClose={onClose}
                   open={modalOpen}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <GroupBox title={'Time (Minutes)'}>
                            <div className={styles.inputFieldContainer}>
                                <Controller name={'pomodoro'}
                                            control={control}
                                            defaultValue={state.settings.time.pomodoro}
                                            render={({field}) => (
                                                <InputField id={'pomodoro'}
                                                            name={'pomodoro'}
                                                            label={'pomodoro'}
                                                            min={1}
                                                            max={999}
                                                            {...field}
                                                />
                                            )}
                                />
                                <Controller name={'shortBreak'}
                                            control={control}
                                            defaultValue={state.settings.time['short break']}
                                            render={({field}) => (
                                                <InputField id={'shortBreak'}
                                                            name={'shortBreak'}
                                                            label={'short break'}
                                                            min={1}
                                                            max={999}
                                                            {...field}
                                                />
                                            )}
                                />
                                <Controller name={'longBreak'}
                                            control={control}
                                            defaultValue={state.settings.time['long break']}
                                            render={({field}) => (
                                                <InputField id={'longBreak'}
                                                            name={'longBreak'}
                                                            label={'long break'}
                                                            min={1}
                                                            max={999}
                                                            {...field}
                                                />
                                            )}
                                />
                            </div>
                        </GroupBox>
                        <GroupBox title={'Font'}
                                  inline
                        >
                            <Controller name={'font'}
                                        control={control}
                                        defaultValue={state.settings.font}
                                        render={({field}) => (
                                            <FontSelect className={styles.select}
                                                        name={'font'}
                                                        fontFamily={['Kumbh Sans', 'Roboto Slab', 'Space Mono']}
                                                        {...field}
                                            />
                                        )}
                            />
                        </GroupBox>
                        <GroupBox title={'Color'}
                                  inline
                        >
                            <Controller name={'color'}
                                        control={control}
                                        defaultValue={state.settings.color}
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
        </div>
    );
};

const InputField = ({ label, id, ...props }) => {
    return (
        <div className={styles.inputFieldWrapper}>
            <label htmlFor={id}>
                {label}
            </label>
            <div className={styles.numberInputWrapper}>
                <NumberInput {...props} />
            </div>
        </div>
    );
};

const GroupBox = ({ title, inline, children }) => {
    return (
        <div className={cn(styles.groupWrapper, {
            [styles.inline]: inline,
        })}>
            <div className={styles.groupTitle}>
                {title}
            </div>
            {children}
        </div>
    );
};

export default Settings;
