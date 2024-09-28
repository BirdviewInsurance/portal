import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const GenerateClaim = () => {
    const [formData, setFormData] = useState({
        product: "",
        names: "",
        policyNumber: "",
        idDocument: null,
        proofOfIdentity: null,
        proofOfAddress: null,
        claimForm: null,
        supportingDocuments: null,
    });

    const [fileNames, setFileNames] = useState({
        idDocument: "",
        proofOfIdentity: "",
        proofOfAddress: "",
        claimForm: "",
        supportingDocuments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const fileName = files[0]?.name.slice(0, 6) || ""; // Get the first 6 letters of the file name

        setFormData((prevData) => ({
            ...prevData,
            [name]: files[0],
        }));

        setFileNames((prevNames) => ({
            ...prevNames,
            [name]: fileName,
        }));
    };

    const handleSubmit = () => {
        // Handle form submission logic here (e.g., send data to server)
        console.log("Claim Data:", formData);
    };

    return (
        <div className="p-1">
       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-2 gap-4">
                {/* Product Selection */}
                <div className="mb-4 col-span-2">
                    <Select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        displayEmpty
                        className="w-full"
                        required
                    >
                        <MenuItem value="">
                            <em>-- Select a product --</em>
                        </MenuItem>
                        <MenuItem value="product1">Product 1</MenuItem>
                        <MenuItem value="product2">Product 2</MenuItem>
                        <MenuItem value="product3">Product 3</MenuItem>
                        {/* Add more products as needed */}
                    </Select>
                </div>

                {/* Names Input */}
                <div className="mb-4 col-span-2">
                    <TextField
                        id="names"
                        name="names"
                        label="Names"
                        value={formData.names}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </div>

                {/* Policy Number Input */}
                <div className="mb-4 col-span-2">
                    <TextField
                        id="policyNumber"
                        name="policyNumber"
                        label="Policy Number"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </div>

                {/* File Uploads - Each independent */}
                <div className="mb-2 col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Upload ID Document</label>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        className="w-full"
                    >
                        Upload
                        <input
                            type="file"
                            name="idDocument"
                            onChange={handleFileChange}
                            accept=".pdf, .jpg, .jpeg, .png"
                            hidden
                            required
                        />
                    </Button>
                    {fileNames.idDocument && <span>File: {fileNames.idDocument}</span>}
                </div>

                <div className="mb-2 col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Proof of Identity</label>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        className="w-full"
                    >
                        Upload
                        <input
                            type="file"
                            name="proofOfIdentity"
                            onChange={handleFileChange}
                            accept=".pdf, .jpg, .jpeg, .png"
                            hidden
                            required
                        />
                    </Button>
                    {fileNames.proofOfIdentity && <span>File: {fileNames.proofOfIdentity}</span>}
                </div>

                <div className="mb-2 col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Proof of Address</label>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        className="w-full"
                    >
                        Upload
                        <input
                            type="file"
                            name="proofOfAddress"
                            onChange={handleFileChange}
                            accept=".pdf, .jpg, .jpeg, .png"
                            hidden
                            required
                        />
                    </Button>
                    {fileNames.proofOfAddress && <span>File: {fileNames.proofOfAddress}</span>}
                </div>

                <div className="mb-2 col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Claim Form</label>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        className="w-full"
                    >
                        Upload
                        <input
                            type="file"
                            name="claimForm"
                            onChange={handleFileChange}
                            accept=".pdf, .jpg, .jpeg, .png"
                            hidden
                            required
                        />
                    </Button>
                    {fileNames.claimForm && <span>File: {fileNames.claimForm}</span>}
                </div>

                <div className="mb-2 col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Supporting Documents</label>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        className="w-full"
                    >
                        Upload
                        <input
                            type="file"
                            name="supportingDocuments"
                            onChange={handleFileChange}
                            accept=".pdf, .jpg, .jpeg, .png"
                            hidden
                            required
                        />
                    </Button>
                    {fileNames.supportingDocuments && <span>File: {fileNames.supportingDocuments}</span>}
                </div>

            </div>
            {/* Submit Button Centered */}
            <div className="flex justify-center mt-4">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Submit Claim
                </Button>
            </div>
        </div>
    );
};

export default GenerateClaim;
