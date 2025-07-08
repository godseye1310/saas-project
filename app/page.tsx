import CompanionCard from "@/components/CompanionCard";
import CompanionsLists from "@/components/CompanionsLists";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
	return (
		<main>
			<h1>Popular Companions</h1>

			<section className="home-section">
				{recentSessions.slice(0, 3).map((companion) => (
					<CompanionCard
						key={companion.id}
						id={companion.id}
						name={companion.name}
						topic={companion.topic}
						subject={companion.subject}
						duration={companion.duration}
						color={companion.color}
						// color={getSubjectColor(companion.subject)}
						bookmarked={false}
					/>
				))}
				{/* <CompanionCard /> */}
			</section>

			<section className="home-section">
				<CompanionsLists
					title="Recently completed sessions"
					companions={recentSessions}
					classNames="w-2/3 max-lg:w-full"
				/>
				<CTA />
			</section>
		</main>
	);
};

export default Page;
