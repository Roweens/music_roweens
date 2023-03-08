import { FC } from 'react';
import classNames from 'classnames';
import Album from '@/../../public/TestAlbum.jpg';
import VolumeIcon from '@/../../public/volume.svg';
import QueueIcon from '@/../../public/queue.svg';
import PlayIcon from '@/../../public/play.svg';
import PlayNext from '@/../../public/playNext.svg';
import PlayBack from '@/../../public/playBack.svg';
import Image from 'next/image';
import cls from './Player.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

interface PlayerProps {
    className?: string;
}

export const Player: FC<PlayerProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.player, {}, [className])}>
            <div className={classNames(cls.chip)}>
                <Image src={Album} width={70} height={70} alt="" />
                <div className={classNames(cls.info)}>
                    <p className={classNames(cls.title)}>Sixteen</p>
                    <p className={classNames(cls.album)}>Deadboy</p>
                </div>
            </div>
            <div className={classNames(cls.controls)}>
                <ul className={classNames(cls.controlsIcons)}>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayBack />
                        </Button>

                    </li>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayIcon />
                        </Button>
                    </li>
                    <li>
                        <Button squared size={ButtonSize.EXTRA_LARGE} theme={ButtonTheme.CLEAN}>
                            <PlayNext />
                        </Button>
                    </li>
                </ul>
                <input
                    type="range"
                    min="0"
                    max="800"
                    step="0.1"
                    className={classNames(cls.duration)}
                />
            </div>
            <div className={classNames(cls.volume)}>
                <Button squared size={ButtonSize.LARGE} theme={ButtonTheme.CLEAN}>
                    <QueueIcon />
                </Button>
                <Button squared size={ButtonSize.LARGE} theme={ButtonTheme.CLEAN}>
                    <VolumeIcon />
                </Button>
                <input type="range" min="0" max="100" step="10" />
            </div>
        </div>
    );
};
