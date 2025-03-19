"use client";

import type React from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
}

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SearchFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: SearchFilterProps) {
  const categories: Category[] = [
    { id: "electronics", name: "Electronics" },
    { id: "clothing", name: "Clothing & Fashion" },
    { id: "home", name: "Home & Kitchen" },
    { id: "sports", name: "Sports & Outdoors" },
    { id: "toys", name: "Toys & Games" },
    { id: "books", name: "Books & Media" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div className="relative w-full max-w-md ml-auto">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className={cn("flex items-center w-full border rounded-lg transition-all overflow-hidden pl-3")}>
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />

          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
          />

          {searchQuery && (
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8 mr-1" onClick={clearSearch}>
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 gap-1 rounded-l-none border-l px-2 sm:px-3" type="button">
                {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || "Categories" : "Categories"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn("cursor-pointer", selectedCategory === category.id && "bg-muted font-medium")}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </form>
    </div>
  );
}
