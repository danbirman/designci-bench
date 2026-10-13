import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel from the billing page whenever you like. Your PRO features stay active until the end of the current billing period.",
  },
  {
    question: "What happens to my posts if I downgrade?",
    answer:
      "Nothing is deleted. Your existing posts stay where they are, and you can keep editing them on the free plan.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Taxonomy is a demo app on a Stripe sandbox, so you are never charged. Use one of the sample cards from the Stripe docs to try the upgrade.",
  },
  {
    question: "How many posts can I create on the free plan?",
    answer:
      "The free plan includes up to 3 posts. Upgrade to PRO for unlimited posts.",
  },
]

export function PricingFaq() {
  return (
    <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
      <h3 className="text-xl font-bold sm:text-2xl">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
