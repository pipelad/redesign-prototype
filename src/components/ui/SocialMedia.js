import React from 'react';
import style from './SocialMedia.module.css';
import { ReactComponent as Facebook } from '../../assets/social_facebook.svg';
import { ReactComponent as Tweeter } from '../../assets/social_tweeter.svg';
import { ReactComponent as Instagram } from '../../assets/social_instagram.svg';
import { ReactComponent as Youtube } from '../../assets/social_youtube.svg';

const SocialMedia = (props) => {
	return(
		<div className={style['social-media']}>
			<a href="" target="_blank"><Facebook /></a>
			<a href="" target="_blank"><Tweeter /></a>
			<a href="" target="_blank"><Instagram /></a>
			<a href="" target="_blank"><Youtube /></a>
		</div>
	)
}

export default SocialMedia;