import { Blockquote, H1, H2, H3, Paragraph } from '@/components/ui/Type'
import React from 'react'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-8 max-w-[1000px] m-auto">
			<div>
				<H1>The Joke Tax Chronicles</H1>
				<Paragraph>
					Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
					day, his advisors came to him with a problem: the kingdom was running out of money.
				</Paragraph>
				<H2 className="mt-10">The King&apos;s Plan</H2>
				<Paragraph>
					The king thought long and hard, and finally came up with{' '}
					<a href="#" className="font-medium text-primary underline underline-offset-4">
						a brilliant plan
					</a>
					: he would tax the jokes in the kingdom.
				</Paragraph>
				<Blockquote>
					After all, he said, everyone enjoys a good joke, so its only fair that they should pay for the privilege.
				</Blockquote>
				<H3 className="mt-8">The Joke Tax</H3>
				<Paragraph>The kings subjects were not amused. They grumbled and complained, but the king was firm:</Paragraph>
				<ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-primary">
					<li>1st level of puns: 5 gold coins</li>
					<li>2nd level of jokes: 10 gold coins</li>
					<li>3rd level of one-liners : 20 gold coins</li>
				</ul>
				<Paragraph>
					As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
					refused to let the kings foolishness get him down: a court jester named Jokester.
				</Paragraph>
				<H3 className="mt-8">Jokesters Revolt</H3>
				<Paragraph>
					Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under
					the kings pillow, in his soup, even in the royal toilet. The king was furious, but he couldnt seem to stop
					Jokester.
				</Paragraph>
				<Paragraph>
					And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
					they couldnt help but laugh. And once they started laughing, they couldnt stop.
				</Paragraph>
				<H3 className="mt-8">The Peoples Rebellion</H3>
				<Paragraph>
					The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon
					the entire kingdom was in on the joke.
				</Paragraph>
				<Paragraph>
					The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
					Jokester was declared a hero, and the kingdom lived happily ever after.
				</Paragraph>
				<Paragraph>
					The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas.
				</Paragraph>
			</div>
		</main>
	)
}
