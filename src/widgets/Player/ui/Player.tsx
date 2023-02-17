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
                        <PlayBack />
                    </li>
                    <li>
                        <PlayIcon />
                    </li>
                    <li>
                        <PlayNext />
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
                <QueueIcon />
                <VolumeIcon />
                <input type="range" min="0" max="100" step="10" />
            </div>
        </div>
    );
};
