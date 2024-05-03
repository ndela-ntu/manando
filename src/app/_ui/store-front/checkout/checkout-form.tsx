"use client";

import { Input, Label } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Summary from "../cart/summary";
import { Button } from "../../button";
import { IoCardOutline } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

type Props = {};

export default function CheckoutForm({}: Props) {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col w-full">
        <PersonalDetails />
        <ShippingAddress />
        <Payment />
      </div>
      <div className="w-full">
        <Summary hideCheckoutButton />
      </div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <form>
      <div className="flex flex-col p-10">
        <h2 className="text-2xl">Personal Details</h2>
        <div className="flex flex-row py-5">
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Name
            </Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Last Name
            </Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <PhoneInput
            country={"za"}
            containerStyle={{
              border: "2px solid gray",
              borderRadius: 5,
              padding: "7px",
            }}
          />
        </div>
        <Button className="mt-5" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

function ShippingAddress() {

  return (
    <form>
      <div className="flex flex-col p-10">
        <h2 className="text-2xl">Shipping Address</h2>
        <div className="flex flex-row py-5">
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Address
            </Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              City
            </Label>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              required
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Postal code
            </Label>
            <Input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Postal Code"
              required
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="name" className="">
              Province
            </Label>
            <Input
              type="text"
              name="province"
              id="province"
              placeholder="Province"
              required
            />
          </div>
        </div>
        <Button className="mt-5" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

function Payment() {
  const [paymentType, setPaymentType] = useState<"Cash" | "Card" | null>(null);

  return (
    <form>
      <div className="flex flex-col p-10">
        <h2 className="text-2xl">Payment</h2>
        <div className="flex flex-row">
          {paymentType == null && (
            <Button
              onClick={() => {
                setPaymentType("Cash");
              }}
            >
              <GiCash size={20} />
              Cash on Delivery
            </Button>
          )}
          {paymentType === "Cash" && (
            <div>
              <h3>We will receive payment on delivery.</h3>
            </div>
          )}
          {paymentType == null && (
            <Button
              onClick={() => {
                setPaymentType("Card");
              }}
            >
              <IoCardOutline size={20} />
              Card Payment
            </Button>
          )}
          {paymentType === "Card" && (
            <div>
              <h3>Card payments coming soon!</h3>
              <Button
                onClick={() => {
                  setPaymentType(null);
                }}
              >
                Okay
              </Button>
            </div>
          )}
        </div>
        {paymentType !== null && paymentType !== "Card" && (
          <Button className="mt-5" type="submit">
            Submit
          </Button>
        )}
      </div>
    </form>
  );
}
