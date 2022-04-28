import Image from 'next/image';
import data from '../../data/data.json';
import {
	Container,
	Tabs,
	Tab,
	MainInformation,
	Group,
	Picture,
	Info,
	Name,
	Description,
	Source,
	Btn,
	MoreInformation,
	Item,
	Title,
	Value,
} from './styles/content';
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';

export default function Content({ name }: { name: string }) {
	const [overview, setOverview] = useState<
		'overview' | 'structure' | 'geology'
	>('overview');

	const contentData = data.filter((item) => item.name === name)[0];

	return (
		<>
			<Tabs>
				<Tab
					active={overview === 'overview'}
					name={name.toLowerCase()}
					onClick={() => setOverview('overview')}
				>
					Overview
				</Tab>
				<Tab
					active={overview === 'structure'}
					onClick={() => setOverview('structure')}
					name={name.toLowerCase()}
				>
					Structure
				</Tab>
				<Tab
					active={overview === 'geology'}
					onClick={() => setOverview('geology')}
					name={name.toLowerCase()}
				>
					Surface
				</Tab>
			</Tabs>
			<Container>
				<MainInformation>
					<Picture show={overview === 'geology' ? 'true' : 'false'}>
						<Image
							src={
								overview === 'overview'
									? contentData.images.planet
									: overview === 'structure'
									? contentData.images.internal
									: contentData.images.planet
							}
							alt={contentData.name}
							layout="fill"
							className="image"
						/>
						<Image
							src={contentData.images.geology}
							alt={contentData.name}
							width={150}
							height={150}
							className="info"
						/>
					</Picture>
					<Info>
						<Group>
							<Name>{contentData.name}</Name>
							<Description>
								{contentData[overview].content}
							</Description>
							<Source>
								Source:{' '}
								<a
									href={contentData[overview].source}
									target="_blank"
									rel="noreferrer"
								>
									Wikipedia <BiLinkExternal />
								</a>
							</Source>
						</Group>
						<Group>
							<Btn
								css={
									overview === 'overview' && {
										background: '$' + name.toLowerCase(),
									}
								}
								onClick={() => setOverview('overview')}
							>
								<span>01</span>Overview
							</Btn>
							<Btn
								css={
									overview === 'structure' && {
										background: '$' + name.toLowerCase(),
									}
								}
								onClick={() => setOverview('structure')}
							>
								<span>02</span>Internal Structure
							</Btn>
							<Btn
								css={
									overview === 'geology' && {
										background: '$' + name.toLowerCase(),
									}
								}
								onClick={() => setOverview('geology')}
							>
								<span>03</span>Surface Geology
							</Btn>
						</Group>
					</Info>
				</MainInformation>
				<MoreInformation>
					<Item>
						<Title>Rotation Time</Title>
						<Value>{contentData.rotation}</Value>
					</Item>
					<Item>
						<Title>Revolution Time</Title>
						<Value>{contentData.revolution}</Value>
					</Item>
					<Item>
						<Title>Radius</Title>
						<Value>{contentData.radius}</Value>
					</Item>
					<Item>
						<Title>Average Temp.</Title>
						<Value>{contentData.temperature}</Value>
					</Item>
				</MoreInformation>
			</Container>
		</>
	);
}