"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    position: "",
    location: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-15 px-4">
      <div className="max-w-2xl mx-auto border border-[#EFF0F6] rounded-2xl p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="Ali"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Osama"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="osama17007@gmail.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="osama17007@gmail.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">
              What positions are you interested in?
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) =>
                setFormData({ ...formData, position: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales Representative</SelectItem>
                <SelectItem value="installer">
                  Installation Technician
                </SelectItem>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="customer-service">
                  Customer Service
                </SelectItem>
                <SelectItem value="marketing">Marketing Specialist</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">
              Which office location (major city) is closest to you?
            </Label>
            <Select
              value={formData.location}
              onValueChange={(value) =>
                setFormData({ ...formData, location: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="houston">Houston</SelectItem>
                <SelectItem value="phoenix">Phoenix</SelectItem>
                <SelectItem value="philadelphia">Philadelphia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center space-x-4">
            <div  className="flex items-center space-x-2 flex-1">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    agreedToTerms: checked as boolean,
                  })
                }
              />
              <Label htmlFor="terms" className="text-sm">
                I agree with terms of usage and privacy policy.
              </Label>
            </div>

            <Button
              type="submit"
              className="bg-[#4981C2] hover:bg-[#63CDF6] hover:cursor-pointer"
              disabled={!formData.agreedToTerms}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
