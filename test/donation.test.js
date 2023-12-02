import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Test on /donation path", () => {
    let server = null;
    let api = null;

    before(async () => {
        server = await app.listen(8000);
        api = request(app);
    });

    it("On success create donation", async () => {
        const donation = {
            unit_price: 1000,
        };

        const response = await api
            .post("/donation")
            .send(donation);

        expect(response.status).to.equal(201);
        expect(response.body).to.have.property("preferenceId");
    });

    after(async () => {
        await server.close();
    });
});
