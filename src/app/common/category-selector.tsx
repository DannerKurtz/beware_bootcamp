import { Button } from "@/components/ui/button";
import type { categoryTable } from "@/db/schema";

interface CategorySelectorProps {
	categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
	return (
		<div className="rounded-3xl p-6 bg-[#F4EFFF]">
			<div className="grid grid-cols-2 gap-3">
				{categories.map((categories) => (
					<Button
						key={categories.id}
						variant={"ghost"}
						className="rounded-full bg-white font-semibold text-xs"
					>
						{categories.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default CategorySelector;
