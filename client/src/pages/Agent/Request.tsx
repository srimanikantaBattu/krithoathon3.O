"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, PackageIcon, InfoIcon } from "lucide-react"

// Define the Request type
type Request = {
  buyerName: string
  location: string
  quantity: number
  category: string
  itemName: string
  expectedDeliveryDate: string
  additionalSpeciations: string
  status: "Pending" | "Accepted" | "Rejected"
}

export default function Request() {
  // Initialize state with the dummy data
  const [requests, setRequests] = useState<Request[]>([
    {
      buyerName: "John Smith",
      location: "New York, USA",
      quantity: 5,
      category: "Electronics",
      itemName: "Wireless Headphones",
      expectedDeliveryDate: "2023-06-15",
      additionalSpeciations: "Noise cancellation feature required",
      status: "Pending",
    },
    {
      buyerName: "Emma Johnson",
      location: "London, UK",
      quantity: 10,
      category: "Furniture",
      itemName: "Office Chair",
      expectedDeliveryDate: "2023-06-20",
      additionalSpeciations: "Ergonomic design, black color",
      status: "Pending",
    },
    {
      buyerName: "Michael Chen",
      location: "Beijing, China",
      quantity: 100,
      category: "Stationery",
      itemName: "Notebooks",
      expectedDeliveryDate: "2023-07-01",
      additionalSpeciations: "A4 size, 200 pages each",
      status: "Pending",
    },
    {
      buyerName: "Sarah Williams",
      location: "Sydney, Australia",
      quantity: 2,
      category: "Appliances",
      itemName: "Blender",
      expectedDeliveryDate: "2023-06-18",
      additionalSpeciations: "Stainless steel blades, 1000W",
      status: "Pending",
    },
    {
      buyerName: "David Kim",
      location: "Seoul, South Korea",
      quantity: 20,
      category: "Clothing",
      itemName: "T-shirts",
      expectedDeliveryDate: "2023-06-25",
      additionalSpeciations: "XL size, cotton material",
      status: "Pending",
    },
    {
      buyerName: "Lisa Rodriguez",
      location: "Mexico City, Mexico",
      quantity: 1,
      category: "Books",
      itemName: "JavaScript Programming Guide",
      expectedDeliveryDate: "2023-06-30",
      additionalSpeciations: "Latest edition",
      status: "Pending",
    },
    {
      buyerName: "James Wilson",
      location: "Toronto, Canada",
      quantity: 50,
      category: "Office Supplies",
      itemName: "Ballpoint Pens",
      expectedDeliveryDate: "2023-07-05",
      additionalSpeciations: "Blue ink, pack of 10",
      status: "Pending",
    },
    {
      buyerName: "Sophia Martinez",
      location: "Madrid, Spain",
      quantity: 3,
      category: "Electronics",
      itemName: "Smart Watch",
      expectedDeliveryDate: "2023-06-22",
      additionalSpeciations: "Water resistant, fitness tracking",
      status: "Pending",
    },
    {
      buyerName: "Robert Brown",
      location: "Berlin, Germany",
      quantity: 15,
      category: "Tools",
      itemName: "Screwdriver Set",
      expectedDeliveryDate: "2023-06-28",
      additionalSpeciations: "Magnetic tips, 10 pieces",
      status: "Pending",
    },
    {
      buyerName: "Olivia Davis",
      location: "Paris, France",
      quantity: 1,
      category: "Home Decor",
      itemName: "Wall Clock",
      expectedDeliveryDate: "2023-07-10",
      additionalSpeciations: "Modern design, silent movement",
      status: "Pending",
    },
  ])

  // Function to handle accepting a request
  const handleAccept = (index: number) => {
    const updatedRequests = [...requests]
    updatedRequests[index].status = "Accepted"
    setRequests(updatedRequests)
    console.log("Request Accepted:", updatedRequests[index])
  }

  // Function to handle rejecting a request
  const handleReject = (index: number) => {
    const updatedRequests = [...requests]
    updatedRequests[index].status = "Rejected"
    setRequests(updatedRequests)
    console.log("Request Rejected:", updatedRequests[index])
  }

  // Function to handle removing a request
  const handleRemove = (index: number) => {
    const updatedRequests = [...requests]
    const removedRequest = updatedRequests[index]
    updatedRequests.splice(index, 1)
    setRequests(updatedRequests)
    console.log("Request Removed:", removedRequest)
  }

  // Filter requests by status
  const allRequests = requests
  const acceptedRequests = requests.filter((request) => request.status === "Accepted")
  const rejectedRequests = requests.filter((request) => request.status === "Rejected")

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  // Function to render request cards
  const renderRequestCards = (requestList: Request[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requestList.length === 0 ? (
          <div className="col-span-full text-center py-10 text-muted-foreground">No requests found</div>
        ) : (
          requestList.map((request, index) => {
            const originalIndex = requests.findIndex(
              (r) => r.buyerName === request.buyerName && r.itemName === request.itemName,
            )

            return (
              <Card key={`${request.buyerName}-${request.itemName}-${index}`} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{request.itemName}</CardTitle>
                    <Badge
                      variant={
                        request.status === "Accepted"
                          ? "success"
                          : request.status === "Rejected"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Buyer:</span> {request.buyerName}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                      <span>{request.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PackageIcon className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {request.quantity} units • {request.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span>Delivery by {formatDate(request.expectedDeliveryDate)}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <InfoIcon className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{request.additionalSpeciations}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  {request.status !== "Accepted" && (
                    <Button variant="default" size="sm" onClick={() => handleAccept(originalIndex)}>
                      Accept
                    </Button>
                  )}
                  {request.status !== "Rejected" && (
                    <Button variant="outline" size="sm" onClick={() => handleReject(originalIndex)}>
                      Reject
                    </Button>
                  )}
                  {request.status === "Rejected" && (
                    <Button variant="destructive" size="sm" onClick={() => handleRemove(originalIndex)}>
                      Remove
                    </Button>
                  )}
                </CardFooter>
              </Card>
            )
          })
        )}
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 px-10">
      <h1 className="text-2xl font-bold mb-6">Buyer Requests</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Requests ({allRequests.length})</TabsTrigger>
          <TabsTrigger value="accepted">Accepted ({acceptedRequests.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedRequests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all">{renderRequestCards(allRequests)}</TabsContent>

        <TabsContent value="accepted">{renderRequestCards(acceptedRequests)}</TabsContent>

        <TabsContent value="rejected">{renderRequestCards(rejectedRequests)}</TabsContent>
      </Tabs>
    </div>
  )
}
